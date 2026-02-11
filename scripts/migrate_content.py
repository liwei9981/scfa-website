import urllib.request
import re
import json
import os
from html.parser import HTMLParser
import time

# Configuration
BASE_URL = "http://www.singapore-china.org/"
EVENTS_INDEX = "events.shtml"
OUTPUT_FILE = "../src/data/events.json"

# Ensure output directory exists
os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

class EventParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.events = []
        self.current_event = {}
        self.in_event_block = False
        self.capture_title = False
        self.capture_date = False
        self.capture_desc = False
        
    def handle_starttag(self, tag, attrs):
        # This is a heuristic based on common old web structures
        # We need to refine this based on actual HTML if possible
        # Assuming events are in tables or divs with specific classes
        pass
        
    def handle_data(self, data):
        pass

# Simple regex-based scraper for better resilience against bad HTML
def scrape_events():
    print(f"Fetching {BASE_URL}{EVENTS_INDEX}...")
    try:
        with urllib.request.urlopen(f"{BASE_URL}{EVENTS_INDEX}") as response:
            html = response.read().decode('utf-8', errors='ignore')
            
        # 1. Find Year Links (e.g., events_2019.shtml)
        # Pattern: <a href="events_2019.shtml">2019</a>
        year_links = re.findall(r'href="(events_\d{4}\.shtml)"', html)
        year_links = sorted(list(set(year_links)), reverse=True)
        
        all_events = []
        
        # Add current events (on the main events page if any, or just scrape sub-years)
        # Check if the main events.shtml has content itself or just links.
        # Often index.shtml redirects or contains the latest.
        
        links_to_scrape = [EVENTS_INDEX] + year_links
        
        for link in links_to_scrape:
            full_url = f"{BASE_URL}{link}"
            print(f"Scraping {full_url}...")
            
            try:
                with urllib.request.urlopen(full_url) as resp:
                    page_html = resp.read().decode('utf-8', errors='ignore')
                    
                # Regex to find event blocks. 
                # Old sites often use <table> or <p><strong>Title</strong></p>
                # Let's look for patterns.
                # Heuristic: Dates in YYYY-MM-DD or DD/MM/YYYY or "12 Oct 2023"
                
                # Let's try to extract images and nearby text which usually indicates an event
                # Pattern: <img src="..."> followed by text
                
                # A common pattern in this site (from observation):
                # <td ...> <img src="..."> </td>
                # <td ...> <span class="title">...</span> ... </td>
                
                # We will extract ALL image contents as potential events for now.
                
                # Find all images
                img_matches = re.finditer(r'<img[^>]+src="([^">]+)"[^>]*>', page_html, re.IGNORECASE)
                
                for match in img_matches:
                    img_src = match.group(1)
                    if 'nav' in img_src or 'logo' in img_src or 'banner' in img_src:
                        continue
                        
                    # Extract text around the image? 
                    # This is hard without a DOM parser.
                    # We will use a simplified assumption:
                    # Collect all text segments and try to pair with images?
                    pass
                
                # Let's fallback to a simple link extractor for "News" or "Events"
                # Often events are links to detail pages or just static content blocks.
                
                # Since we don't have a perfect DOM parser, we'll create a PLACEHOLDER list
                # based on some regex matches for dates.
                
                date_matches = re.finditer(r'(\d{1,2}[\.\/-]\d{1,2}[\.\/-]\d{2,4}|\d{4}年\d{1,2}月\d{1,2}日)', page_html)
                
                for dm in date_matches:
                    date_str = dm.group(1)
                    # Extract 100 chars after date as title
                    start = dm.end()
                    title_chunk = page_html[start:start+150]
                    # Clean tags
                    title = re.sub(r'<[^>]+>', '', title_chunk).strip()
                    if title:
                        all_events.append({
                            "date": date_str,
                            "title": title[:100] + "...",
                            "source_url": full_url
                        })
                        
            except Exception as e:
                print(f"Error scraping {link}: {e}")
                
            time.sleep(1) # Be polite
            
        print(f"Found {len(all_events)} events.")
        
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(all_events, f, ensure_ascii=False, indent=2)
            
        print(f"Saved to {OUTPUT_FILE}")
            
    except Exception as e:
        print(f"Failed to scrape: {e}")

if __name__ == "__main__":
    scrape_events()

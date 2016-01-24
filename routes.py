from bs4 import BeautifulSoup
import urllib2
import json


# download url and make into soup
def get_soup(url):
    req = urllib2.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    url = urllib2.urlopen(req, timeout=5.0).read()
    soup = BeautifulSoup(url, 'html.parser')
    return soup


def list_accessible_MUNI_stops(url='https://www.sfmta.com/getting-around/accessibility/muni-metro-accessible-stops'):
    soup = get_soup(url)
    accessible_stops_tags_list = soup.select('tr li')

    accessible_stops_string_list = []
    for stop in accessible_stops_tags_list:
        accessible_stops_string_list.append(stop.string)
    print accessible_stops_string_list
    return json.dumps(accessible_stops_string_list)

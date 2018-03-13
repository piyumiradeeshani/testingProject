from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from lxml import html
import xml.etree.ElementTree as ET
from selenium.webdriver.common.by import By

options = Options()
###uncomment followings to go headless###
# options.add_argument('--headless')
# options.add_argument('--disable-gpu')
browser = webdriver.Chrome( executable_path ='C:/Users/piyumi_r/Documents/chromedriver', chrome_options=options)

browser.get("https://booking.com")
city = browser.find_element_by_id('ss')
city.send_keys('Singapore, Singapore')
webdriver.ActionChains(browser).send_keys(Keys.TAB).perform()

searchButton = browser.find_element_by_class_name('sb-searchbox__button')
searchButton.click()

#set check-in and check-out dates to url and refresh
browser.get(browser.current_url + 'checkin_month=3&checkin_monthday=23&checkin_year=2018&checkout_month=3&checkout_monthday=24&checkout_year=2018&')

hotelNames = browser.find_elements_by_xpath('//*[@id="hotellist_inner"]/div[contains(@class, "sr_property_block")]/div[2]/div[1]/div[1]/h3/a/span[1]')
hotelUrls = browser.find_elements_by_xpath('//*[@id="hotellist_inner"]/div[contains(@class, "sr_property_block")]/div[2]/div[1]/div[1]/h3/a[1]')
hotelPrices = browser.find_elements_by_xpath('//*[@id="hotellist_inner"]/div[contains(@class, "sr_property_block")]/div[2]/div/div/table/tbody/tr/td[2]/div/strong/b')

blocks=browser.find_elements_by_xpath('//*[@id="hotellist_inner"]/div[contains(@class, "sr_property_block")]')
#root=ET.fromstring(html_source)
#parsed_html = BeautifulSoup(html_source, "html.parser")
#print(html_source)     {"class":"price availprice no_rack_rate "}
#pricesTag=parsed_html.findAll('strong',{"class":"price availprice no_rack_rate"})




print("##########################################")

for element in blocks:
    print(element.find_element_by_xpath('.//div[2]/div[1]/div[1]/h3/a/span[1]').text+"            "
          + element.find_element_by_xpath('.//div[2]/div[1]/div[1]/h3/a[1]').get_attribute('href')+"         "
          + element.find_element_by_xpath('.//div[2]/div/div/table/tbody/tr/td[2]/div/strong/b').text)




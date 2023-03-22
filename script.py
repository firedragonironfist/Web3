from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

# Set the path to your ChromeDriver executable
chromedriver_path = 'C:\chromedriver_win64\chromedriver.exe'

# Set the URL you want to visit
url = 'https://www.lambdatest.com/'

# Set up the Chrome WebDriver with the necessary options
options = Options()
options.add_argument('--disable-dev-shm-usage')
options.add_argument('--no-sandbox')
options.add_argument('--disable-gpu')
options.add_argument('--remote-debugging-port=9222')
options.add_argument('--headless')
service = Service(executable_path=chromedriver_path)
service.start()
driver = webdriver.Chrome(service=service, options=options)
driver.get(url)

# Find all the anchor tags on the page and click on them
anchor_tags = driver.find_elements(By.TAG_NAME, 'a')
for tag in anchor_tags:
    tag.click()
    time.sleep(2)

# Get the network logs using the browser's built-in developer tools
logs = driver.execute_script("return window.performance.getEntries();")

# Save the network logs to a file
with open('network_logs.txt', 'w') as f:
    for log in logs:
        f.write(str(log) + '\n')

# Quit the driver and stop the ChromeDriver service
driver.quit()
service.stop()
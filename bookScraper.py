import urllib3, re
from bs4 import BeautifulSoup  
from csv import DictReader, DictWriter


#Choose a filename for your CSV
def get_book_data(filename):
    #Master lists outside of any loops for items that will be scraped
    titles = []
    prices = []
    
    #Convert British Pounds to USD (as of 20190801)
    def gbp_to_usd_rounded(amount):
        return f'$ {round((amount * 1.21255),2)} seconds.'

    #Prepare to scrape 50 pages
    for i in range(1,51):
        #All of the page urls follow the same format with the exception of one number
        url = f'http://books.toscrape.com/catalogue/category/books_1/page-{i}.html'

        req = urllib3.PoolManager()
        res = req.request('GET', url)
        soup = BeautifulSoup(res.data, 'html.parser') 
        contents = soup.find_all(class_= 'product_pod')

        #Based off of the title parameter within the site html
        for i in soup.find_all(title=True):
            titles.append(i['title'])
        
        #Temporary lists for british currency conversions
        pounds = []
        c = []
        for i in contents:
            c.append(i.find(class_='price_color').get_text())
        
            for number in c:
                #Extract the British Pound symbol and join the numbers and decimal points back together
                amount = re.compile('[0-9]+.')
                num = amount.findall(number)
                pounds.append(float(''.join(num)))

        #Create a temporary list for the current loop and append to the master list after we run the conversion function
        temp = list(map(gbp_to_usd_rounded,pounds))
        for t in temp:
            prices.append(t)

    #Combine both lists into a dictionary
    res = dict(zip(titles,prices))

    #Create an Excel Document the dictionary
    # with open(filename,'w',newline='') as file:
    #     headers = ("Book Title", 'Price (in usd)')
    #     csv_writer = DictWriter(file,fieldnames=headers)
    #     csv_writer.writeheader()
    #     for k,v in res.items():
    #         csv_writer.writerow({
    #             'Book Title' : k,
    #             'Price (in usd)' : v
    #     })

get_book_data('BookResearch_Beta.csv')

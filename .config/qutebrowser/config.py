# import pywalQute.draw

config.load_autoconfig()

c.editor.command = ["alacritty", "-e", "nvim", "{}"]
c.content.blocking.adblock.lists = ['https://easylist.to/easylist/easylist.txt', 'https://easylist.to/easylist/easyprivacy.txt', 'https://easylist-downloads.adblockplus.org/easylistdutch.txt', 'https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt', 'https://www.i-dont-care-about-cookies.eu/abp/', 'https://secure.fanboy.co.nz/fanboy-cookiemonster.txt']

# config.set("colors.webpage.darkmode.enabled", True)

# pywalQute.draw.color(c, {
#     'spacing': {
#         'vertical': 6,
#         'horizontal': 8
#     }
# })

config.source('qutewal.py')

config.bind("cr", "config-source")

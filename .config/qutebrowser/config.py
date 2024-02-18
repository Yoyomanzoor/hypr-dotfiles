# import pywalQute.draw

config.load_autoconfig()

c.editor.command = ["alacritty", "-e", "nvim", "{}"]

# config.set("colors.webpage.darkmode.enabled", True)

# pywalQute.draw.color(c, {
#     'spacing': {
#         'vertical': 6,
#         'horizontal': 8
#     }
# })

config.source('qutewal.py')

return {
	{
		"rose-pine/neovim",
		name = "rose-pine",
		config = function()
			require("rose-pine").setup({})
			-- http://lua-users.org/wiki/FileInputOutput

			-- see if the file exists
			function file_exists(file)
				local f = io.open(file, "rb")
				if f then
					f:close()
				end
				return f ~= nil
			end

			-- get all lines from a file, returns an empty
			-- list/table if the file does not exist
			function lines_from(file)
				if not file_exists(file) then
					return {}
				end
				local lines = {}
				for line in io.lines(file) do
					lines[#lines + 1] = line
				end
				return lines
			end

			-- tests the functions above
			local file = "/home/yoyomanzoor/.config/gtk-3.0/settings.ini"
			local lines = lines_from(file)

			-- print all line numbers and their contents
			for k, v in pairs(lines) do
				if string.find(v, "gtk%-application%-prefer%-dark%-theme") then
					-- print(v)
					for s, l in string.gmatch(v, "(%w+)=(%w+)") do
						if l == "1" then
							vim.cmd("colorscheme rose-pine-main")
						else
							vim.cmd("colorscheme rose-pine-dawn")
						end
					end
				end
			end
		end,
	},
	"f-person/auto-dark-mode.nvim",
	opts = {
		update_interval = 1000,
		set_dark_mode = function()
			-- vim.api.nvim_set_option_value("background", "dark", {})
			vim.cmd("colorscheme rose-pine-main")
		end,
		set_light_mode = function()
			-- vim.api.nvim_set_option_value("background", "light", {})
			vim.cmd("colorscheme rose-pine-dawn")
		end,
	},
}

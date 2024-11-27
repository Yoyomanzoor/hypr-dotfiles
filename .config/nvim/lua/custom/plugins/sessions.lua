return {
	--[[ "natecraddock/sessions.nvim",
	config = function()
		require("sessions").setup({
			events = { "WinEnter" },
			session_filepath = vim.fn.stdpath("data") .. "/sessions",
			abolute = true,
		})
	end, ]]
	{
		"rmagatti/auto-session",
		lazy = false,

		---enables autocomplete for opts
		---@module "auto-session"
		---@type AutoSession.Config
		opts = {
			suppressed_dirs = { "~/", "~/Projects", "~/Downloads", "/" },
			-- log_level = 'debug',
		},
	},
}

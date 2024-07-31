let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif
call plug#begin()
" The default plugin directory will be as follows:
"   - Vim (Linux/macOS): '~/.vim/plugged'
"   - Vim (Windows): '~/vimfiles/plugged'
"   - Neovim (Linux/macOS/Windows): stdpath('data') . '/plugged'
" You can specify a custom plugin directory by passing it as the argument
"   - e.g. `call plug#begin('~/.vim/plugged')`
"   - Avoid using standard Vim directory names like 'plugin'

" Make sure you use single quotes

" vim-plug
Plug 'preservim/nerdtree'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'github/copilot.vim'
Plug 'vim-airline/vim-airline-themes'
Plug 'lervag/vimtex'
Plug 'https://gitlab.com/yorickpeterse/nvim-window.git'
Plug 'liuchengxu/vim-which-key', { 'on': ['WhichKey', 'WhichKey!'] }
Plug 'nvim-treesitter/nvim-treesitter'
Plug 'nvim-treesitter/nvim-treesitter-textobjects'
Plug 'nvim-treesitter/playground'
Plug 'nvim-tree/nvim-web-devicons'
" Plug 'glepnir/dashboard-nvim'
" Plug 'mhinz/vim-startify'
Plug 'nvim-lua/plenary.nvim'
Plug 'nvim-telescope/telescope.nvim'
Plug 'nvim-telescope/telescope-file-browser.nvim'
Plug 'echasnovski/mini.nvim'
Plug 'echasnovski/mini.starter'
Plug 'karb94/neoscroll.nvim'
Plug 'numToStr/Comment.nvim'
Plug 'vim-scripts/savevers.vim'
" Plug 'sjl/gundo.vim'
Plug 'mbbill/undotree'
Plug 'pangloss/vim-javascript'


" Initialize plugin system
" - Automatically executes `filetype plugin indent on` and `syntax enable`.
call plug#end()
" You can revert the settings after the call like so:
"   filetype indent off   " Disable file-type-specific indentation
"   syntax off            " Disable syntax highlighting

" open NERDTree automatically
"autocmd StdinReadPre * let s:std_in=1
"autocmd VimEnter * NERDTree

let g:NERDTreeGitStatusWithFlags = 1
"let g:WebDevIconsUnicodeDecorateFolderNodes = 1
"let g:NERDTreeGitStatusNodeColorization = 1
"let g:NERDTreeColorMapCustom = {
    "\ "Staged"    : "#0ee375",  
    "\ "Modified"  : "#d9bf91",  
    "\ "Renamed"   : "#51C9FC",  
    "\ "Untracked" : "#FCE77C",  
    "\ "Unmerged"  : "#FC51E6",  
    "\ "Dirty"     : "#FFBD61",  
    "\ "Clean"     : "#87939A",   
    "\ "Ignored"   : "#808080"   
    "\ }                         

let g:NERDTreeIgnore = ['^node_modules$']
let NERDTreeShowHidden=1
let g:NERDTreeWinPos = "right"
nmap <C-n> :NERDTreeToggle<CR>

nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gr <Plug>(coc-references)

nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)
nnoremap <silent> <space>s :<C-u>CocList -I symbols<cr>

nnoremap <silent> <space>d :<C-u>CocList diagnostics<cr>

nmap <leader>do <Plug>(coc-codeaction)

nmap <leader>rn <Plug>(coc-rename)

let g:coc_global_extensions = [
  \ 'coc-tsserver',
  \ 'coc-json',
  \ 'coc-css',
  \  'coc-eslint',
  \  'coc-prettier'
  \ ]

set laststatus=2
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
let g:airline_statusline_ontop=0
let g:airline_theme='nord-minimal'
let g:airline#extensions#tabline#formatter = 'default'
" navegação entre os buffers
nnoremap <M-Right> :bn<cr>
nnoremap <M-Left> :bp<cr>
nnoremap <c-x> :bp \|bd #<cr>

" This is necessary for VimTeX to load properly. The "indent" is optional.
" Note that most plugin managers will do this automatically.
filetype plugin indent on

" This enables Vim's and neovim's syntax-related features. Without this, some
" VimTeX features will not work (see ":help vimtex-requirements" for more
" info).
syntax enable

" Viewer options: One may configure the viewer either by specifying a built-in
" viewer method:
let g:vimtex_view_method = 'zathura'

" Or with a generic interface:
let g:vimtex_view_general_viewer = 'okular'
let g:vimtex_view_general_options = '--unique file:@pdf\#src:@line@tex'

" VimTeX uses latexmk as the default compiler backend. If you use it, which is
" strongly recommended, you probably don't need to configure anything. If you
" want another compiler backend, you can change it as follows. The list of
" supported backends and further explanation is provided in the documentation,
" see ":help vimtex-compiler".
let g:vimtex_compiler_method = 'latexrun'

" Most VimTeX mappings rely on localleader and this can be changed with the
" following line. The default is usually fine and is the symbol "\".
let maplocalleader = ","

" This enables VimTeX to automatically insert braces after commands like \frac
" and \sqrt. This is a feature of the LaTeX-suite plugin for Vim and is
" disabled by default in VimTeX. If you want this feature, you can enable it
" with the following line.
" let g:vimtex_autoclose = 1
" let g:vimtex_fold_enabled = 0

" Save revisions of the file
" Use :Purge 0 to remove all revisions
" Use :Purge 1 to remove all revisions except the last one
set backup
set backupdir=~/tmp/
set backupext=string
" set patchmode=.clean

set undofile
set undodir=~/.vim/undodir

nnoremap <F5> :UndotreeToggle<CR>

" YoyoVim
set showcmd
set number
set relativenumber
set cursorline
set expandtab
set autoindent
set smartindent
set shiftwidth=4
set tabstop=4
set encoding=utf8
set clipboard=unnamedplus
set linebreak
:filetype on
" autocmd FileType markdown set spell
autocmd FileType make set noexpandtab shiftwidth=4 softtabstop=4
" autocmd ColorScheme * hi SpellBad cterm=underline
:noremap tt :tab split<CR>
:noremap tn :tabnew \| lua MiniStarter.open()<CR>
:noremap t. :tabm +1 <CR>
:noremap t, :tabm -1 <CR>
:noremap <leader>r :lua MiniStarter.open()<CR>
":noremap vs :vsplit<CR>
":noremap hs :split<CR>

"search highlighted text
vnoremap // y/\V<C-R>=escape(@",'/\')<CR><CR>

nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

hi Normal guibg=NONE ctermbg=NONE

map <silent> <leader>w :lua require('nvim-window').pick()<CR>

lua << EOF
require'nvim-treesitter.configs'.setup {
  ensure_installed = { "c", "lua", "vim"},
  highlight = {
    enable = true
  }
}

require('neoscroll').setup()
require('Comment').setup()
require('mini.starter').setup()

-- Mini starter
local status, starter = pcall(require, "mini.starter")
if not status then
	return
end

starter.setup({
	content_hooks = {
		starter.gen_hook.adding_bullet(""),
		starter.gen_hook.aligning("center", "center"),
	},
	evaluate_single = true,
	footer = os.date(),
	header = table.concat({
		[[  /\ \▔\___  ___/\   /(●)_ __ ___  ]],
		[[ /  \/ / _ \/ _ \ \ / / | '_ ` _ \ ]],
		[[/ /\  /  __/ (_) \ V /| | | | | | |]],
		[[\_\ \/ \___|\___/ \_/ |_|_| |_| |_|]],
		[[───────────────────────────────────]],
	}, "\n"),
	query_updaters = [[abcdefghilmoqrstuvwxyz0123456789_-,.ABCDEFGHIJKLMOQRSTUVWXYZ]],
	items = {
        --start.sections.telescope(),
        starter.sections.recent_files(5, true),
        starter.sections.recent_files(5, false),
		{ action = "Telescope file_browser hidden=true no_ignore=true", name = "B: File Browser", section = "Telescope" },
		{ action = "Telescope find_files hidden=true no_ignore=true", name = "F: Find Files", section = "Telescope" },
		{ action = "PlugInstall", name = "U: Update Plugins", section = "Plugins" },
		{ action = "enew", name = "E: New Buffer", section = "Builtin actions" },
		{ action = "q!", name = "Q: Quit Neovim", section = "Builtin actions" },
	},
    content_hooks = {
      starter.gen_hook.adding_bullet(),
      starter.gen_hook.aligning('center', 'center'),
    },
})

vim.cmd([[
  augroup MiniStarterJK
    au!
    au User MiniStarterOpened nmap <buffer> j <Cmd>lua MiniStarter.update_current_item('next')<CR>
    au User MiniStarterOpened nmap <buffer> k <Cmd>lua MiniStarter.update_current_item('prev')<CR>
    au User MiniStarterOpened nmap <buffer> <C-b> <Cmd>Telescope find_files<CR>
    au User MiniStarterOpened nmap <buffer> <C-f> <Cmd>Telescope file_browser<CR>
  augroup END
]])
EOF

function light -d "Set light theme"
    set -xU theme "light"
    kitty +kitten themes --reload-in=all Rosé\ Pine\ Dawn
end

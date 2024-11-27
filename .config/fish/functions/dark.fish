function dark -d "Set dark theme"
    set -xU theme "dark"
    kitty +kitten themes --reload-in=all Rosé\ Pine
end

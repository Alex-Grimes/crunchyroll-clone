import crunchyRoll from  "../../assets/Crunchyroll_2018_II.png"
import { createSignal } from "solid-js";




export default function Header(){

    const [browseDropdown, setBrowseDropdown] = createSignal(false);
    const toggle = () => setBrowseDropdown(!browseDropdown())

 
    
    return(
        <div class="bg-gray-600 flex items-center h-14 pl-5">
            <img  class="" src={crunchyRoll} alt="CrunchyRoll Horizontal Icon" />

            <div class="grid gap-4 grid-cols-5">
                <div class="relative inline-block text-left">
                    <div class="flex flex-1">
                        <button type="button" onClick={toggle} class="mx-3 inline-flex w-full h-full justify-center text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Browse
                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                    {browseDropdown() &&
                        <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <form method="post" action="#" role="none">
                                <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                            </form>
                            </div>
                        </div>
                    }
                    </div>
                <div>
                    Manga
                </div>
                <div>
                    Games
                </div>
                <div>
                    Store
                </div>
                <div>
                    News
                </div>
            </div>
        </div>
    )
}
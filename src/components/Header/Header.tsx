import crunchyRoll from  "../../assets/Crunchyroll_2018_II.png"

export default function Header(){
 
    
    return(
        <div class="bg-gray-600 flex items-center h-14 pl-5">
            <img  class="" src={crunchyRoll} alt="CrunchyRoll Horizontal Icon" />

            <div class="grid gap-4 grid-cols-5">
                <div>
                    Browse
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
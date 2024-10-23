import { Button } from '../../components/ui/button';
import { Menubar, 
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger, } from '../../components/ui/menubar'

  function MenuBar(){
    return(
        <>
            <Menubar>
        <div className='p-2 flex flex-row justify-between bg-slate-600 h-50 w-full'>
        	<MenubarMenu>
				<MenubarTrigger className='text-white text-xl mt-2'>Destinations</MenubarTrigger>
				<MenubarContent>
				<MenubarItem>India
				</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Paris</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Korea</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>USA</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Singapore</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
        
			<MenubarMenu>
				<ul className='text-white text-xl flex flex-row space-x-4 my-auto'>
                    <li>Packages</li>
                    <li>Hotels</li>
                    <li>Contact us</li>
				</ul>
			</MenubarMenu>

			<MenubarMenu>
				<Button className='px-4 mt-2 py-1'>Login</Button>   
			</MenubarMenu>
          </div>
    </Menubar>

        </>
    )
  }

  export default MenuBar;
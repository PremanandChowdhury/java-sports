// @ts-nocheck
import AppFooter from '@/components/reusable/AppFooter'
import AppHeader from '@/components/reusable/AppHeader'
import tune from '@/assets/icons/tune.svg'
import sort from '@/assets/icons/sort.svg'
import sort1 from '@/assets/icons/sort1.svg'
import AppProductSlider from '@/components/reusable/AppProductSlider'
import AppCard from '@/components/reusable/AppCard'


const index = () => {
    return (
        <>
            <AppHeader />
            <div className='bg-white justify-center'>
                <div className=' p-3 bg-grey/1'>
                    <div className=''>
                        <span className=' pl-[145px] max-lg:pl-9 font-Lato text-[16px] font-700 align-middle'>Home {`>>`} Bats {`>>`} <span className='text-red-500'>All</span></span>
                    </div>
                </div>
                <div className='p-5 pl-[158px] flex justify-between max-lg:pr-10 max-lg:pl-10 pr-[158px]'>
                    <div className='flex '>
                        <span className='text-[16px] font-Lato font-700 p-2'>Fillter</span>
                        <img src={tune} alt="" />
                    </div>
                    <div className='flex gap-1'>
                        <img className='max-lg:rotate-90' src={sort} alt="" />
                        <span className='text-[16px] font-Lato font-700 p-2 max-lg:hidden'>Sort by</span>
                        <div className='flex p-2 border-black border rounded-lg gap-2'>
                            <select >
                                <option className='m-1 p-4'>Most Relevent</option>
                                <option>Popular</option>
                                <option>Most Reviewed</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 bg-white'>
                <div className='bg-white justify-center py-4 max-lg:hidden'>
                    <div className='font-Lato ml-[50px] w-[220px] border-2 p-4'>
                        <div className='flex flex-col'>
                            <div className='flex'>
                                <span className=' pr-6 text-xl font-Lato font-700'>Accessory Type:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="all-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="all-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Grip-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Grip-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Grip</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Stickers</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="balls-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="balls-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Cricket Balls</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="bats-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="bats-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Bat Covers</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Wrist-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Wrist-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Wrist Bands</label>
                                    </div>
                                </li>
                            </ul>

                            <div className='flex'>
                                <span className='text-xl font-Lato font-700'>Color:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Allc-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Allc-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Blue-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Blue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Blue</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Green-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Green</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="White-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="White-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">White</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Black-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Black-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Black</label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='flex'>
                            <span className='text-xl font-Lato font-700'>Price Range:</span>
                        </div>
                        <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                            <li class="w-full">
                                <div class="flex items-center ps-3">
                                    <input id="All2-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label for="All2-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                </div>
                            </li>
                            <div class="relative mb-6">
                                <label for="labels-range-input" className="m-4 sr-only">Labels range</label>
                                <span className="text-xs text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ₹400 </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ₹40000</span>
                                <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                            </div>
                        </ul>
                        <div className='flex justify-center'>
                            <span className='text-xl font-Lato font-700'>Customer Ratings:</span>
                        </div>
                        <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                            <li class="w-full">
                                <div class="flex items-center ps-3">
                                    <input id="Allr-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label for="Allr-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                </div>
                            </li>
                            <li class="w-full">
                                <div class="flex items-center ps-3">
                                    <input id="4star-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label for="4star-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">4 stars & above</label>
                                </div>
                            </li>
                            <li class="w-full">
                                <div class="flex items-center ps-3">
                                    <input id="3star-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label for="3star-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">3 stars & above</label>
                                </div>
                            </li>
                            <li class="w-full">
                                <div class="flex items-center ps-3">
                                    <input id="2star-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label for="2star-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">2 stars & above</label>
                                </div>
                            </li>
                        </ul>

                        <div className='flex'>
                            <span className='text-xl font-Lato font-700'>New Arivals:</span>
                        </div>
                        <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                            <li class="w-full">
                                <div class="flex items-center ps-3">
                                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                    <label for="vue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Show new arrivals only</label>
                                </div>
                            </li>
                        </ul>
                        <div className='my-4'>
                            <button className='text-white font-Lato font-800 bg-black p-2 rounded-md'>Reset All</button>
                        </div>
                    </div>
                </div>
                <div className='bg-white grid grid-cols-4 gap-5 max-lg:grid-cols-2'>

                </div>
            </div>
            <div>

            </div>
            <AppFooter />
        </>
    )
}
export default index


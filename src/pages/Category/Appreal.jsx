// @ts-nocheck
import AppFooter from '@/components/reusable/AppFooter'
import AppHeader from '@/components/reusable/AppHeader'
import tune from '@/assets/icons/tune.svg'
import sort from '@/assets/icons/sort.svg'
import right from '@assets/icons/right.svg'
import left from '@assets/icons/left.svg'
import { useState } from 'react'

const Appreal = () => {
    const [MenuToggle, setMenuToggle] = useState(false)
    return (
        <>
            <AppHeader />
            <div className='bg-white justify-center relative'>
                <div className=' p-3 bg-grey/1'>
                    <div className=''>
                        <span className=' pl-[140px] max-lg:pl-9 font-Lato text-[16px] font-700 align-middle'>Home {`>>`} Appreal {`>>`} <span className='text-red-500'>All</span></span>
                    </div>
                </div>
                <div className='p-5 pl-[140px] flex justify-between max-lg:pr-10 max-lg:pl-10 pr-[158px]'>
                    <div className='flex '>
                        <span className='text-[16px] font-Lato font-700 p-2'>Fillter</span>
                        <button onClick={() => setMenuToggle((prev) => !prev)} > <img src={tune} alt="" /></button>
                    </div>
                    {MenuToggle && (
                        <div className='bg-white  absolute left-[-400px] top-[100px] border-2 xl:hidden p-5 duration-1500 translate-x-[400px]'>
                              <div className='flex flex-col'>
                                <div className='flex'>
                                    <span className=' pl-2 text-xl font-Lato font-700'>Appreal Type:</span>
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
                                            <label for="Grip-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Jerseys</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Pants</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Caps</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Jackets</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Compression Wear</label>
                                        </div>
                                    </li>
                                </ul>

                                <div className='flex'>
                                    <span className='pl-2 text-xl font-Lato font-700'>Size:</span>
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
                                            <label for="Blue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">S</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Green-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">M</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="White-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="White-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">L</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="Black-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Black-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">XL</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="Black-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Black-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">XXL</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex'>
                                <span className='pl-2 text-xl font-Lato font-700'>Color:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Allc-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Allc-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Blue</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Blue-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Blue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Green</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Green-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">White</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Green-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Black</label>
                                    </div>
                                </li>
                            </ul>

                            <div className='flex'>
                                <span className='pl-2 text-xl font-Lato font-700'>Price Range:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="All2-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="All2-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                    </div>
                                </li>
                                <div class="ml-2 mb-6">
                                    <div className='flex justify-between '>
                                        <label htmlFor="range" class=" text-xs font-Lato font-700">₹400</label>
                                        <label htmlFor="range" class="text-xs font-Lato font-700" >₹2000</label>
                                    </div>
                                    <input type="range" name='range' id='range' class="range-field " min="400" max="2000" />
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
                                <span className=' pl-2 text-xl font-Lato font-700'>New Arivals:</span>
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

                    )}
                    <div className='flex gap-1'>
                        <img className='max-lg:rotate-90' src={sort} alt="" />
                        <span className='text-[16px] font-Lato font-700 p-2 max-lg:hidden'>Sort by</span>
                        <select id="countries" className="bg-gray-50 border border-gray-300 p-2">
                            <option selected>Most Relevent</option>
                            <option value="US">Low to High price</option>
                            <option value="CA">High to low price</option>
                            <option value="FR">Most Popular</option>
                            <option value="DE">Most Rating </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex gap-4 bg-white'>
                    <div className='bg-white justify-center py-4 max-lg:hidden pl-[10%]'>
                        <div className='font-Lato w-[220px] border-2 p-4'>
                            <div className='flex flex-col'>
                                <div className='flex'>
                                    <span className=' pl-2 text-xl font-Lato font-700'>Appreal Type:</span>
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
                                            <label for="Grip-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Jerseys</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Pants</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Caps</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Jackets</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Stickers-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Stickers-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Compression Wear</label>
                                        </div>
                                    </li>
                                </ul>

                                <div className='flex'>
                                    <span className='pl-2 text-xl font-Lato font-700'>Size:</span>
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
                                            <label for="Blue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">S</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="Green-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">M</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div class="flex items-center ps-3">
                                            <input id="White-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="White-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">L</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="Black-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Black-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">XL</label>
                                        </div>
                                    </li>
                                    <li class="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id="Black-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                            <label for="Black-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">XXL</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex'>
                                <span className='pl-2 text-xl font-Lato font-700'>Color:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Allc-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Allc-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Blue</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Blue-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Blue-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Green</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Green-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">White</label>
                                    </div>
                                </li>
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="Green-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="Green-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">Black</label>
                                    </div>
                                </li>
                            </ul>

                            <div className='flex'>
                                <span className='pl-2 text-xl font-Lato font-700'>Price Range:</span>
                            </div>
                            <ul class="w-48 text-sm font-medium text-gray-900 bg-white">
                                <li class="w-full">
                                    <div class="flex items-center ps-3">
                                        <input id="All2-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-900 border-gray-900 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 " />
                                        <label for="All2-checkbox" class="w-full py-2 ms-1 text-xs font-Lato font-700">All</label>
                                    </div>
                                </li>
                                <div class="ml-2 mb-6">
                                    <div className='flex justify-between '>
                                        <label htmlFor="range" class=" text-xs font-Lato font-700">₹400</label>
                                        <label htmlFor="range" class="text-xs font-Lato font-700" >₹2000</label>
                                    </div>
                                    <input type="range" name='range' id='range' class="range-field " min="400" max="2000" />
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
                                <span className=' pl-2 text-xl font-Lato font-700'>New Arivals:</span>
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

                    {/* App Card wrapper */}
                    <div className='bg-white grid grid-cols-4 gap-5 max-lg:grid-cols-2'>
                        {/* <AppCard/>
                    <AppCard/>
                    <AppCard/>
                    <AppCard/>
                    <AppCard/> */}
                    </div>
                </div>

                {/* Pagnation */}
                <div className='flex bg-white gap-1 p-5 justify-end pr-[10%]'>
                    <button className='border-2 rounded py-1 px-4 m-1'>
                        <img src={left} alt="right" />
                    </button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700 text-xs'>1</button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700'>...</button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700 text-xs'>10</button>
                    <button className='border-2 py-1 px-4 m-1 rounded font-Lato font-700'>
                        <img src={right} alt="left" />
                    </button>
                </div>
            </div>
            <AppFooter />
        </>
    )
}
export default Appreal
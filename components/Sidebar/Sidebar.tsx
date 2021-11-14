import {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {
    BellIcon,
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentReportIcon,
    HomeIcon,
    MenuAlt1Icon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XIcon,
} from '@heroicons/react/outline'
import {
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    OfficeBuildingIcon,
    SearchIcon,
} from '@heroicons/react/solid'
import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import {setSidebarStatus, sidebarSelector} from "../../store/slices/sidebar";

const navigation = [
    {name: 'Home', href: '#', icon: HomeIcon, current: true},
    {name: 'History', href: '#', icon: ClockIcon, current: false},
    {name: 'Balances', href: '#', icon: ScaleIcon, current: false},
    {name: 'Cards', href: '#', icon: CreditCardIcon, current: false},
    {name: 'Recipients', href: '#', icon: UserGroupIcon, current: false},
    {name: 'Reports', href: '#', icon: DocumentReportIcon, current: false},
]
const secondaryNavigation = [
    {name: 'Settings', href: '#', icon: CogIcon},
    {name: 'Help', href: '#', icon: QuestionMarkCircleIcon},
    {name: 'Privacy', href: '#', icon: ShieldCheckIcon},
]
const cards = [
    {name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45'},
    // More items...
]
const transactions = [
    {
        id: 1,
        name: 'Payment to Molly Sanders',
        href: '#',
        amount: '$20,000',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
    },
    // More transactions...
]
const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
}
interface SidebarProps {
    sidebarStatus: boolean
}

export default function Sidebar(props: SidebarProps){
    const {sidebarIsOpen} = useSelector(sidebarSelector);
    const dispatch = useDispatch()
    const setSidebarOpen = (state: boolean) => {
        dispatch(setSidebarStatus(state))
    }
    return(
        <Fragment>
            <Transition.Root show={sidebarIsOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={()=>setSidebarOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                                    alt="Easywire logo"
                                />
                            </div>
                            <nav
                                className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                                aria-label="Sidebar"
                            >
                                <div className="px-2 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                                                       aria-hidden="true"/>
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6">
                                    <div className="px-2 space-y-1">
                                        {secondaryNavigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                                            >
                                                <item.icon className="mr-4 h-6 w-6 text-cyan-200"
                                                           aria-hidden="true"/>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                            <span className="h-8 w-auto text-2xl font-bold text-white">
                                BIMA
                            </span>
                    </div>
                    <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
                         aria-label="Sidebar">
                        <div className="px-2 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                                        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                                               aria-hidden="true"/>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-6 pt-6">
                            <div className="px-2 space-y-1">
                                {secondaryNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                                    >
                                        <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true"/>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}
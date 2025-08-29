// import { NavLink } from "react-router-dom";
// import { cn } from "@/lib/utils";
// import { useFetchData } from "@/hooks/useFetchData";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
// import { AppDynamicIcon } from "./app-dynamicicon";

// type MenuItem = {
//     id: number;
//     title: string;
//     url: string;
//     icon?: string; // store lucide icon name as string in DB
//     parent_id?: number | null;
// };

// export function AppNavbar() {
//     // fetch all menu items ordered by id
//     const { data: menuItems, loading, error } = useFetchData<MenuItem>("menu_items", {
//         column: "id",
//         ascending: true,
//     });

//     if (loading) return <p>Loading menu...</p>;
//     if (error) return <p className="text-red-500">Error: {error}</p>;

//     // build tree (top-level + sub-items)
//     const topLevel = menuItems.filter((item) => !item.parent_id);
//     const withChildren = topLevel.map((item) => ({
//         ...item,
//         items: menuItems.filter((sub) => sub.parent_id === item.id),
//     }));

//     return (
//         <nav className="hidden md:flex gap-1">
//             {withChildren.map((item) =>
//                 item.items.length ? (
//                     <DropdownMenu key={item.id}>
//                         <DropdownMenuTrigger className="focus-visible:outline-none">
//                             <NavLink
//                                 to={item.url}
//                                 className={({ isActive }) =>
//                                     cn(
//                                         "flex items-center gap-2 rounded-md p-2.5 text-sm transition hover:bg-accent hover:text-accent-foreground h-8",
//                                         isActive ? "bg-accent text-foreground" : "text-foreground/70"
//                                     )
//                                 }
//                             >
//                                 {/* if icon is saved as string like 'Home', map dynamically */}
//                                 {item.icon && <AppDynamicIcon name={item.icon} />}
//                                 <span className="font-medium">{item.title}</span>
//                                 <ChevronDown className="!size-3 -ml-1" />
//                             </NavLink>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="start" className="min-w-48">
//                             {item.items.map((subItem) => (
//                                 <DropdownMenuItem key={subItem.id} asChild>
//                                     <NavLink
//                                         to={subItem.url}
//                                         className={({ isActive }) =>
//                                             cn(
//                                                 "cursor-pointer block px-2 py-1.5 rounded-md",
//                                                 isActive && "bg-muted text-foreground"
//                                             )
//                                         }
//                                     >
//                                         {subItem.title}
//                                     </NavLink>
//                                 </DropdownMenuItem>
//                             ))}
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 ) : (
//                     <NavLink
//                         key={item.id}
//                         to={item.url}
//                         className={({ isActive }) =>
//                             cn(
//                                 "flex items-center gap-2 rounded-md p-2.5 text-sm transition hover:bg-accent hover:text-accent-foreground h-8",
//                                 isActive ? "bg-accent text-foreground" : "text-foreground/70"
//                             )
//                         }
//                     >
//                             {item.icon && <AppDynamicIcon name={item.icon} />}
//                         <span className="font-medium">{item.title}</span>
//                     </NavLink>
//                 )
//             )}
//         </nav>
//     );
// }

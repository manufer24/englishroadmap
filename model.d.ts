// model.d.ts test

// Define the types for the links inside the linksSections
type Link = {
    path: string;
    name: string;
}

// Define the types for the linksSections
type LinksSection = {
    path: string;
    name: string;
    links: Link[];
}

// Define the type for the homeData
type HomeData = {
    id: number;
    name: string;
    slug: string;
    style: string;
    path: string;
}

// Define the types for the views inside the viewsData
type View = {
    name: string;
    description: string | null;	
    slug: string;
    linksSections: LinksSection[] | [];
    homeData: HomeData[] | [];
}

// Define the type for the viewsData
type ViewsData = {
    views: View[];
}

// Define the type for the event parameter
type Event = {
    // Define the type for the router param
    getRouterParam: (event: unknown, paramName: string) => string;
}

// Define the type for the event handler
type EventHandler = (event: Event) => View | undefined;
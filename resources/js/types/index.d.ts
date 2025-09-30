import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Advantage {
    id: number;
    icon: string;
    title: string;
    description: string | null;
    created_at: string;
    updated_at: string;
}

export interface AboutUs {
    id: number;
    image: string | null;
    description: string | null;
    created_at: string;
    updated_at: string;
}

export interface Motto {
    id: number;
    motto: string;
    image: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface Contact {
    id: number;
    address: string | null;
    whatsapp: string | null;
    email: string | null;
    instagram: string | null;
    facebook: string | null;
    linkedin: string | null;
    created_at: string;
    updated_at: string;
}

export interface Procedure {
    id: number;
    image: string;
    order: number;
    title: string;
    description: string | null;
    created_at: string;
    updated_at: string;
}

export interface Certification {
    id: number;
    logo: string;
    name: string;
    description: string | null;
    created_at: string;
    updated_at: string;
}

export interface HomePageProps {
    advantages: Advantage[];
    aboutUs: AboutUs | null;
    motto: Motto | null;
    contact: Contact | null;
    procedures: Procedure[];
    certifications: Certification[];
}

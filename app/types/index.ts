import { User, Listing } from "@prisma/client";

export type SafeListing = Omit<
    Listing,
    "createdAt"    
> & {
    createdAt: string;
}

export type SafeReservation = omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "listing"
> & {
    createdAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListing;
}

export type SafeUser = Omit<
User,
"createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string| null;
}
'use client';

import { IconType } from 'react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import qs from 'query-string';

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

function CategoryBox({ icon: Icon, label, selected}: CategoryBoxProps) {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        // Parse params and make them an object instead of a string
        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        // Update current query to includ category containing label
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }
        
        // If params category is equal to label remove label from category
        if (params?.get('category')=== label) {
            delete updatedQuery.category;
        }

        // Generate url string 
        const url = qs.stringifyUrl({
            url:'/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

    return (
        <div 
            onClick={handleClick}
            className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}

export default CategoryBox

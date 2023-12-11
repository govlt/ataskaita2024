'use client';
import {useSearchParams} from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();

    const goal = searchParams.get('npp');
    return <p>Tikslas: {goal}</p>
}
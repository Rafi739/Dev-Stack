import { useEffect, useState } from "react";

type Technology = {
    name: string;
    icon: string;
    iconColor: string;
    iconBg?: string;
    badge?: string;
    badgeColor?: string;
    category: string;
    level: string;
    rating: string;
    description: string;
};

const Product = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);

    useEffect(() => {
fetch(`${import.meta.env.BASE_URL}product.json`)            .then((res) => res.json())
            .then((data) => setTechnologies(data))
            .catch((error) => {
                console.error("Failed to load technologies:", error);
            });
    }, []);

    const addToStack = (tech: Technology) => {
        const alreadyAdded = stack.some(
            (item: Technology) => item.name === tech.name
        );

        if (!alreadyAdded) {
            setStack((prevStack) => [...prevStack, tech]);
        }
    };

    const removeFromStack = (name: string) => {
        setStack((prevStack) =>
            prevStack.filter(
                (item: Technology) => item.name !== name
            )
        );
    };


    const removeAll = () => {
        setStack([]);
    };

    return (
        <section className="min-h-screen bg-white py-12">
            <div className="mx-auto w-[85%] max-w-7xl">

                <div>
                    <h2 className="text-[32px] font-bold leading-tight text-[#111827]">
                        Explore the{" "}
                        <span className="text-[#d52b9c]">Technologies </span>
                    </h2>

                    <p className="mt-2 text-[14px] text-gray-400">
                        Pick one technology per category to build your ideal
                        stack.
                    </p>
                </div>

                <div className="mt-8 flex items-start gap-7">

                    <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {technologies.map((tech: Technology) => {

                            const isAdded = stack.some(
                                (item: Technology) =>
                                    item.name === tech.name
                            );

                            return (
                                <div
                                    key={tech.name}
                                    className="rounded-[10px] border border-gray-200 bg-white p-5 shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition duration-300 hover:shadow-md"
                                >

                                    <div className="flex h-8 items-start justify-between">

                                        <span className={` ${tech.iconColor} ${tech.iconBg ?? ""} text-[21px] font-bold `} >
                                            {tech.icon}
                                        </span>

                                        {tech.badge && (
                                            <span className={` ${tech.badgeColor ?? ""} rounded-full px-2.5 py-1 text-[10px] `}>
                                                {tech.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="mt-2 text-[18px] font-semibold text-[#111827]">
                                        {tech.name}
                                    </h3>

                                    <p className="mt-2 h-12 overflow-hidden text-[12px] leading-5 text-gray-400">
                                        {tech.description}
                                    </p>

                                    <div className="mt-3 flex items-center justify-between">

                                        <span className="rounded bg-gray-50 px-2 py-1 text-[10px] text-gray-500">
                                            {tech.category}
                                        </span>

                                        <span className="text-[10px] text-gray-400">
                                            {tech.level}

                                            <span className="ml-1 text-yellow-400"> ★ </span>

                                            <span className="ml-0.5"> {tech.rating} </span>
                                        </span>

                                    </div>

                                    <button type="button" onClick={() => addToStack(tech)} disabled={isAdded} className={` mt-3 w-full rounded-md py-2.5 text-[12px] text-white transition duration-300
                                            ${isAdded
                                            ? "cursor-not-allowed bg-gray-400"
                                            : "bg-[#0d1320] hover:bg-[#d91b7e]"
                                        }`}>

                                        {isAdded
                                            ? "✓ Added to Stack"
                                            : "Add to Stack"}
                                    </button>
                                </div>
                            );
                        })}

                    </div>

                    <div className="hidden w-60 shrink-0 rounded-[10px] border border-gray-200 bg-white p-5 md:block">

                        <h3 className="text-[16px] font-bold text-[#111827]">Your Stack</h3>

                        <p className="mt-1.5 text-[10px] text-gray-400">
                            {stack.length} technologies selected yet.
                        </p>

                        <div className="mt-4 space-y-2">

                            {stack.length === 0 ? (

                                <div className="flex h-16 items-center justify-center rounded-md border border-dashed border-gray-200 px-3 text-center">
                                    <span className="text-[10px] text-gray-300">
                                        Your stack is empty.
                                    </span>
                                </div>

                            ) : (

                                stack.map((item: Technology) => (

                                    <div
                                        key={item.name}
                                        className="flex items-center justify-between rounded-md border border-gray-200 px-2.5 py-2">

                                        <div className="flex min-w-0 items-center gap-2">

                                            <span
                                                className={` ${item.iconColor} ${item.iconBg ?? ""} text-[11px] font-bold `} >
                                                {item.icon}
                                            </span>

                                            <span className="truncate text-[10px] font-medium text-gray-700">
                                                {item.name}
                                            </span>

                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeFromStack(item.name)
                                            }
                                            className="ml-1 text-[14px] text-gray-400 transition hover:text-red-500"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {stack.length > 0 && (
                            <button type="button" onClick={removeAll} className="mt-4 w-full rounded-md border border-red-200 py-2 text-[10px] text-red-400 transition hover:bg-red-50" >
                                Remove All
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
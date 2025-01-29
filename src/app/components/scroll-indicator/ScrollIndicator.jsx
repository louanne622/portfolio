const ScrollIndicator = () => {
    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <div className="w-2 h-2 rounded-full bg-pink-300 transition-all duration-300 hover:scale-150" />
            <div className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:scale-150" />
            {/* Ajoutez autant de points que vous avez de sections */}
        </div>
    );
}; 
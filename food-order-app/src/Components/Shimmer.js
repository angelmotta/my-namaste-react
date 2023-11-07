const ShimmerContainer = () => {
    return (
        <div className="dishes-container">
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
            <ShimmerDishCard />
        </div>
    );
};

const ShimmerDishCard = () => {
    return (
        <div className="shimmer-dish-card">
            <div className="shimmer-pic-dish"></div>
        </div>
    );
};

export default ShimmerContainer;

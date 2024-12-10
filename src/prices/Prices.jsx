import PriceOption from "../priceoption/PriceOption";


export default function Prices() {
    const gymMembershipOptions = [
        {
            id: 1,
            name: "Basic Plan",
            pricee: 20,
            features: [
                "Access to gym during off-peak hours (9 AM–5 PM)",
                "Use of cardio and weight training equipment",
                "1 complimentary personal training session per year",
            ],
        },
        {
            id: 2,
            name: "Standard Plan",
            pricee: 40,
            features: [
                "Full access to gym during all operating hours",
                "Access to group fitness classes (e.g., yoga, spinning)",
                "Use of locker rooms and showers",
                "3 complimentary personal training sessions per year",
            ],
        },
        {
            id: 3,
            name: "Premium Plan",
            pricee: 70,
            features: [
                "All benefits of the Standard Plan",
                "Priority booking for classes and training",
                "Unlimited access to spa and sauna facilities",
                "Free guest passes (5 per month)",
                "1 personal training session per month",
            ],
        },
        {
            id: 4,
            name: "Family Plan",
            pricee: 100,
            features: [
                "Includes membership for up to 4 family members",
                "All benefits of the Premium Plan",
                "Family-friendly classes and activities",
                "Childcare services available during workout sessions",
            ],
        },
    ];


    return (
        <div className="">
            <h2 className="text-3xl mb-4 text-center bg-green-600 rounded-xl text-white font-bold">The best zym in the town here</h2>
            <div className="grid md:grid-cols-3 p-8 gap-6">{
                gymMembershipOptions.map(price => <PriceOption key={price.id} price={price}></PriceOption>)
            }
            </div>
        </div>
    )
}

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip,ResponsiveContainer,CartesianGrid ,Legend,Rectangle} from "recharts";

// const Phone = () => {
//     const [phones, setphones] = useState([]);
//     useEffect(() => {
//         // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//         // .then(res=>res.json())
//         // .then(data=>setphones(data.data));
//         axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
//             .then(data => {
//                 const phon = data.data.data;
//                 const tempodata = phon.map(phon => {
//                     const obj = {
//                         name: phon.phone_name,
//                         price: phon.slug.split('-')[1]
//                     }
//                     return obj;

//                 })
//                 setphones(tempodata);

//                 console.log(tempodata)
//             })
//     }, [])

//     return (
//         <div>
//             <h2 className="text-5xl">phones:{phones.length}</h2>

//             <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                     width={500}
//                     height={300}
//                     data={phones}
//                     margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//                     <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
//                 </BarChart>
//             </ResponsiveContainer>

//         </div>
//     );
// };

// export default Phone;
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Rectangle } from "recharts";

const Phone = () => {
    const [phones, setphones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phon = data.data.data;
                const tempodata = phon.map(phon => {
                    const obj = {
                        name: phon.phone_name,
                        price: phon.slug.split('-')[1]
                    }
                    return obj;
                })
                setphones(tempodata);
                console.log(tempodata);
            });
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={phones}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="price" /> {/* Change to the appropriate dataKey */}
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phone;

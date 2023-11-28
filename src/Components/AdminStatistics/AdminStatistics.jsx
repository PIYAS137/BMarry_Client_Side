import SectionHeader from "../SectionHeader/SectionHeader"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const AdminStatistics = ({finalData}) => {

    const data = [
        { name: 'Male Biodata', value: finalData?.male_biodata_count    },
        { name: 'Female Biodata', value: finalData?.female_biodata_count },
        { name: 'Premium Biodata', value: finalData?.premium_biodata_count },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className=" w-full h-[400px] mb-20">
            <SectionHeader big={'Statistics View'} small={'show all data as quantitative order'} />
            <div className=" w-full h-full -mt-28">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AdminStatistics
export default function Activities({data}) {
    const activities = data.activities
    console.log(activities)
    return (
        <div>
            <div>
                <h3>Activies</h3>
            </div>
            <div>
                <ul>
                    {activities.forEach(activity => {
                        return (
                            <li>{activity}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    // const fs = require("fs");
    // const { parse } = require("csv-parse");
    
    // async function readFile(path) {
    //     return new Promise((resolve, reject) => {
    //       fs.readFile(path, 'utf8', function (err, data) {
    //         parse(data, {columns: false, trim: true}, function(err, rows) {
    //             if (err) {
    //                 reject(err);
    //             }
    //             resolve(rows);
    //         })
    //       });
    //     });
    // }
    // let bar_data = await readFile("./public/files/bars.csv");
    const bars_data = await (await fetch('http://localhost:3000/api/bars-sheet')).json()
    const restaurants_data = await (await fetch('http://localhost:3000/api/restaurants-sheet')).json()
    const tours_data = await (await fetch('http://localhost:3000/api/tours-sheet')).json()
    const outdoors_data = await (await fetch('http://localhost:3000/api/outdoors-sheet')).json()

    return {
        props: {
            data: {
                activities: [
                    {
                        bars: bars_data.data,
                        restaurants: restaurants_data.data,
                        outdoor: tours_data.data,
                        tours: tours_data.data
                    }
                ]
            }
        }
    }
}
import React from 'react'

const LBNames = () => {

    const rankings = [
        { rank: 1, name: 'Alice Johnson' },
        { rank: 2, name: 'Bob Smith' },
        { rank: 3, name: 'Charlie Brown' },
        { rank: 4, name: 'Diana Prince' },
        { rank: 5, name: 'Ethan Hunt' },
        { rank: 6, name: 'Fiona Apple' },
        { rank: 7, name: 'George Martin' },
        { rank: 8, name: 'Hannah Montana' },
        { rank: 9, name: 'Isaac Newton' },
        { rank: 10, name: 'Julia Roberts' },
        { rank: 11, name: 'Kevin Bacon' },
        { rank: 12, name: 'Lily Allen' },
        { rank: 13, name: 'Mason Green' },
        { rank: 14, name: 'Nina Simone' },
        { rank: 15, name: 'Oscar Isaac' },
        { rank: 16, name: 'Paula Patton' },
        { rank: 17, name: 'Quincy Jones' },
        { rank: 18, name: 'Rachel Green' },
        { rank: 19, name: 'Samuel L. Jackson' },
        { rank: 20, name: 'Tina Turner' },
        { rank: 21, name: 'Ursula Andress' },
        { rank: 22, name: 'Victor Hugo' },
        { rank: 23, name: 'Wendy Williams' },
        { rank: 24, name: 'Xander Cage' },
        { rank: 25, name: 'Yara Shahidi' },
        { rank: 26, name: 'Zane Malik' },
        { rank: 27, name: 'Ava Gardner' },
        { rank: 28, name: 'Boris Johnson' },
        { rank: 29, name: 'Cynthia Nixon' },
        { rank: 30, name: 'David Beckham' },
        { rank: 31, name: 'Emily Blunt' },
        { rank: 32, name: 'Frank Sinatra' },
        { rank: 33, name: 'Gina Rodriguez' },
        { rank: 34, name: 'Henry Cavill' },
        { rank: 35, name: 'Irene Adler' },
        { rank: 36, name: 'James Franco' },
        { rank: 37, name: 'Kylie Minogue' },
        { rank: 38, name: 'Leonardo DiCaprio' },
        { rank: 39, name: 'Margot Robbie' },
        { rank: 40, name: 'Neil Patrick Harris' }
    ];


    return (
        <div className="max-sm:w-[70%] max-sm:h-[50%] no-scrollbar h-full overflow-auto flex flex-col rounded-lg p-2">
            {rankings.map((user) => (
                <div key={user.rank} className="flex gap-2 rounded-xl text-sm max-sm:text-xs m-1">
                    <div className='font-semibold px-3 sm:px-5 flex justify-center items-center rounded-xl bg-[#DA011F] text-white py-3'>
                        {user.rank}
                    </div>
                    <div className='font-semibold flex-1 rounded-xl bg-[#DA011F] text-white px-4 sm:px-6 py-2 flex justify-center items-center'>
                        {user.name}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LBNames;

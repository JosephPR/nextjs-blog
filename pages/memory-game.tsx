import { useState } from "react";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

type TCell = {
    row: number,
    col: number,
}

const MemoryGame = () => {
    const [grid] = useState([
        [1, 6, 3, 4],
        [4, 2, 5 ,1],
        [5, 3, 2, 6]
    ]);
    const [revealedGrid, setRevealedGrid] = useState([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]);
    const [previousClick, setPreviousClick] = useState<TCell | undefined>()

    function handleCardClicked(rowIndex: number, colIndex: number) {
        const clickedNumber = grid[rowIndex][colIndex];
        // reveal clicked card 
        const newRevealedGrid = [...revealedGrid];
        newRevealedGrid[rowIndex][colIndex] = true;
        setRevealedGrid( newRevealedGrid);

        if(previousClick){
            const previousClickedNumber = grid[previousClick.row][previousClick.col]
            if(previousClickedNumber !== clickedNumber){
                //if they don't match hide them after 1 second 
                setTimeout(() => {
                    newRevealedGrid[rowIndex][colIndex] = false;
                    //hide first click
                    newRevealedGrid[previousClick.row][previousClick.col] = false;

                    setRevealedGrid([...newRevealedGrid]);
                }, 1000)
            } else {
                const hasWon = revealedGrid.flat().every((isRevealed) => isRevealed);
                if (hasWon) {
                    setTimeout(() => {
                        alert("Congratulations you have won")

                    })
                }
            }
            setPreviousClick(undefined);
        } else {
            setPreviousClick({
                row: rowIndex,
                col: colIndex
        })   ;
    }
    }
    return (<Layout home={false}>
    
        <div className={utilStyles.flex}>
            {grid.map((row, rowIndex) => {
                return <div key={rowIndex} className={utilStyles.row}>
                    {row.map((number, colIndex) => (
                        <div
                        onClick={() => handleCardClicked(rowIndex, colIndex)}
                        className={utilStyles.card} key={colIndex}>{revealedGrid[rowIndex][colIndex] ? number : " "}</div>
                    ))}
                </div>
            })}
        </div>
    </Layout>    
    );
}

export default MemoryGame;

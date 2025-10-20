import { forwardRef } from 'react';

import ClassNameInterface from '@/utils/interface/classname';
import { cn } from '@/lib/cn';

export interface SquaredLogoProps extends ClassNameInterface {
    backgrounds?: boolean,
    displayCredentials?: boolean,
    headerText?: string,
}

const SquaredLogo = forwardRef<HTMLDivElement, SquaredLogoProps>(({ 
    backgrounds = true, 
    displayCredentials = true,
    headerText, 
    className,
    id
}, ref) => {
    return (
        <div className={cn('square-container', className)} id={id} ref={ref}>
            { backgrounds && (["one", "two", "three"]
                .map((squareClassName, i) => <div key={i} className={`square ${squareClassName}`}></div>)) }
            <div className="main-square">
                { headerText && (<h1 className='header-text'>{headerText}</h1>) }
                <h1 className='port'>P</h1>
                <h2 className='folio'>f</h2>
                {displayCredentials && (<p className='author'>By <span>Rayane Merlin</span></p>)}
            </div>
        </div>
    )
});

SquaredLogo.displayName = 'SquaredLogo';

export default SquaredLogo;

/*

    Apply this SCSS as tailwindcss, change all vw to %, vw only for the container

    .square-container {
        
        $square-width: 30vw;
        z-index: 0;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s, color 0.3s;
        background-size: contain;
        background-repeat: no-repeat;
        width: $square-width;
        height: $square-width;
        top: calc(50% - ($square-width / 2));
        left: 3vw;
        pointer-events: none;
        overflow: visible;

        .square {

            position: absolute;
            width: 37vw;
            height: 37vw;

            border-radius: 10%;

            $spacement: 9vw;
            $coefficient: 1.3;

            &.one {
                background-color: $index-triangle-yellow-background-color;
                top: -$spacement;
                left: calc(-#{$coefficient} * #{$spacement});
            }

            &.two {
                background-color: $index-triangle-orange-background-color;
                bottom: -$spacement;
            }

            &.three {
                background-color: $index-triangle-red-background-color;
                top: calc(-#{$coefficient} * #{$spacement});
                right: calc(-#{$coefficient} * #{$spacement});
            }

        }
        
        .main-square {
            
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 18%;
            position: relative;
            background-color: blanchedalmond;
            width: 100%;
            height: 100%;

            * {
                margin: 0;
                font-family: 'AdobeBold', sans-serif;
                // color: rgb(239 222 144); Yellow from logo
                color: white;
            }

            h1, h2 {
                line-height: 1;
                // -webkit-text-stroke-width: 0.3vw;
                // -webkit-text-stroke-color: blanchedalmond;
            }

            p.author, h1.header-text {

                position: absolute;
                
                &.author {

                    bottom: -15%; 
                    font-size: 2vw; 

                    span {
                        font-style: italic;
                    }

                }

                &.header-text {
                    bottom: 103%;
                    font-size: 5vw;
                    font-weight: 600;
                    font-family: 'AdobeBold', sans-serif;
                    color: $main-title-color;
                }

                &, * {
                    font-family: Poppins, sans-serif;
                    font-weight: 500;
                    color: black;
                }
            }

            h1.port {
                font-size: 20.2vw;
                position: absolute;
                top: 15%;
                left: 16%;
                z-index: 1;
            }

            h2.folio {
                position: absolute;
                left: 58.5%;
                top: 16%;
                font-size: 20vw;
                z-index: 2;
            }

        }
    }

*/
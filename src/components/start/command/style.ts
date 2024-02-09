import { createStyles, css } from "antd-style";

const useStyles = createStyles({
    container: css`
        background-color: #262626;
        background-image: linear-gradient(
            135deg, 
            #ff4593, 
            #ffe713 32%, 
            #17d7ff 66%, 
            #077bff
        );
        border-radius: 1rem;
        box-shadow: 
            rgba(255, 69, 146, .2) -40px -40px 200px,
            rgba(255, 231, 18, .2) 4px 0px 200px,
            rgba(23, 216, 255, .2) 0px 20px 200px,
            rgba(8, 123, 255, .2) 0px 20px 200px;
        padding: 1px;
        position: relative;
        width: 600px;
    `,
    layout: {
        alignItems: 'center',
        backgroundColor: '#0e0f11',
        color: 'white',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        padding: 40,
    },
    mask: css`
        background-image: linear-gradient(
            0deg,
            #0f0f0f 20%,
            rgba(15, 15, 15, 0)
        );
        bottom: -9%;
        display: block;
        height: 16rem;
        left: -21%;
        pointer-events: none;
        position: absolute;
        right: -21%;
        top: auto;
        z-index: 22;
    `,
    menuContainer: css`
        background-color: #262626;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 8px 0;
    `,
    menuItem: css`
        align-items: center;
        color: hsla(0, 0%, 100%, .75);
        cursor: pointer;
        display: flex;
        height: 40px;
        justify-content: space-between;
        padding: 0 14px;
    `,
    menuItemHover: css`
        background-color: #363636;
    `,
    placeholder: css`
        color: hsla(0, 0%, 100%, .4);
        flex: 1;
        padding-left: 8px;
    `,
    searchBox: css`
        align-items: center;
        background-color: #262626;
        border-bottom: 1px solid #444;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        display: flex;
        padding: 1rem;
    `,
    wraper: css`
        margin-bottom: 100px;
        & code {
            background-color: #f2f2f2;
            border: 1px solid #ddd;
            margin: 0 2px;
            padding: 4px;
        }
    `,
});

export default useStyles;
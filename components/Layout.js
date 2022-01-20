/* eslint-disable */
import Navbar from './organisms/Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
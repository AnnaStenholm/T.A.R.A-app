const [showPrevious, setShowPrevious] = useState(true);

{showPrevious ? (
    <li 
    onClick={() => setShowPrevious(false)} 
    className="list-group-item show-previous">
    Visa tidigare program
    </li>
) : (
    <li 
    onClick={() => setShowPrevious(true)} 
    className="list-group-item show-previous">
    Dölj tidigare program
    </li>
)}
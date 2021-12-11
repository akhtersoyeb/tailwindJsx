import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


export default function CodeSyntaxHighlighter({ codeString }) {

    return (
        <SyntaxHighlighter language="jsx" style={atomOneLight} showLineNumbers>
            {codeString}
        </SyntaxHighlighter>
    )
}

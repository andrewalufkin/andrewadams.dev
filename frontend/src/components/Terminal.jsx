// Terminal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { text: 'Welcome to my portfolio terminal!', type: 'system' },
    { text: 'Type "help" to see available commands.', type: 'system' }
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const navigate = useNavigate();

  // Focus the input field when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand();
    }
  };

  const processCommand = () => {
    const command = input.trim().toLowerCase();
    
    // Add command to output
    setOutput([...output, { text: `$ ${input}`, type: 'command' }]);
    
    // Process command
    if (command === 'help') {
      setOutput(prev => [...prev, 
        { text: 'Available commands:', type: 'result' },
        { text: '  about       - Learn about me', type: 'result' },
        { text: '  skills      - See my technical skills', type: 'result' },
        { text: '  projects    - View my projects', type: 'result' },
        { text: '  contact     - Get my contact info', type: 'result' },
        { text: '  clear       - Clear the terminal', type: 'result' },
        { text: '  navigate <page> - Go to a specific page', type: 'result' }
      ]);
    } else if (command === 'about') {
      setOutput(prev => [...prev, 
        { text: 'Software Engineer with a CS degree from Rice University.', type: 'result' },
        { text: 'Passionate about full-stack development and DevOps.', type: 'result' },
        { text: 'Type "navigate about" to learn more.', type: 'result' }
      ]);
    } else if (command === 'skills') {
      setOutput(prev => [...prev, 
        { text: 'Technical Skills:', type: 'result' },
        { text: '  Languages: JavaScript, Python, TypeScript, HTML/CSS', type: 'result' },
        { text: '  Frameworks: React, Node.js, Express, Next.js', type: 'result' },
        { text: '  Tools: Git, Docker, Jenkins, AWS', type: 'result' },
        { text: 'Type "navigate about" to see more.', type: 'result' }
      ]);
    } else if (command === 'projects') {
      setOutput(prev => [...prev, 
        { text: 'Notable Projects:', type: 'result' },
        { text: '  - CI/CD Pipeline Manager', type: 'result' },
        { text: '  - AI Bible Study App', type: 'result' },
        { text: 'Type "navigate projects" to see details.', type: 'result' }
      ]);
    } else if (command === 'contact') {
      setOutput(prev => [...prev, 
        { text: 'Email: andrewalufkin@gmail.com', type: 'result' },
        { text: 'GitHub: github.com/andrewalufkin', type: 'result' },
        { text: 'LinkedIn: linkedin.com/in/andrew-adams-425823246', type: 'result' },
        { text: 'Type "navigate contact" to see more options.', type: 'result' }
      ]);
    } else if (command === 'clear') {
      setOutput([
        { text: 'Terminal cleared.', type: 'system' },
        { text: 'Type "help" to see available commands.', type: 'system' }
      ]);
    } else if (command.startsWith('navigate ')) {
      const page = command.split(' ')[1];
      if (['home', 'about', 'projects', 'contact'].includes(page)) {
        setOutput(prev => [...prev, { text: `Navigating to ${page} page...`, type: 'result' }]);
        navigate(page === 'home' ? '/' : `/${page}`);
      } else {
        setOutput(prev => [...prev, { text: `Unknown page: ${page}`, type: 'error' }]);
      }
    } else {
      setOutput(prev => [...prev, { text: `Command not found: ${command}`, type: 'error' }]);
    }
    
    // Clear input
    setInput('');
  };

  return (
    <div className="terminal" ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <div className="terminal-title">portfolio-terminal</div>
      </div>
      <div className="terminal-body">
        {output.map((line, index) => (
          <div key={index} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="prompt">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
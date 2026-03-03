import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import NotificationBadge, { Effect } from '../src/index.js';

const App = () => {
  const [messages, setMessages] = useState(3);
  const [alerts, setAlerts] = useState(1);
  const [tasks, setTasks] = useState(5);
  const [friends, setFriends] = useState(0);

  // SVG Icons (Bigger)
  const MailIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const BellIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"></path>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  );

  const UserIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const SettingIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );

  const containerStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    maxWidth: '800px',
    margin: '40px auto',
    padding: '32px',
    border: '1px solid #eaeaea',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff'
  };

  const sectionStyle = {
    marginBottom: '40px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid #eaeaea',
    marginBottom: '30px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '30px',
    marginBottom: '30px'
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px',
    border: '1px solid #f0f0f0',
    borderRadius: '12px',
    backgroundColor: '#fafafa'
  };

  const iconContainerStyle = {
    position: 'relative',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    marginBottom: '16px'
  };

  const titleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#444',
    marginBottom: '8px',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: '12px',
    color: '#888',
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '8px 16px',
    marginRight: '12px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: '#0070f3',
    border: '1px solid #0070f3',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>
          <h2 style={{ margin: 0, color: '#111', fontSize: '24px' }}>Badge Playground</h2>
          <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '14px' }}>Explore all animation effects and configurations</p>
        </div>
        <div style={iconContainerStyle} title="Settings Update">
          <SettingIcon />
          {/* Custom Animation Effect */}
          <NotificationBadge
            count={1}
            label="!"
            effect={[null, null, { top: '-5px' }, { top: '0px' }]}
            style={{ backgroundColor: '#f5a623', right: '-4px' }}
          />
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={gridStyle}>

          {/* Default Usage (Scale) */}
          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <MailIcon />
              <NotificationBadge
                count={messages}
                effect={Effect.SCALE}
              />
            </div>
            <div style={titleStyle}>Effect.SCALE</div>
            <div style={subtitleStyle}>Default scale animation</div>
          </div>

          {/* Rotate X */}
          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <BellIcon />
              <NotificationBadge
                count={alerts}
                effect={Effect.ROTATE_X}
                style={{ backgroundColor: '#e53e3e' }}
              />
            </div>
            <div style={titleStyle}>Effect.ROTATE_X</div>
            <div style={subtitleStyle}>Flips vertically</div>
          </div>

          {/* Rotate Y */}
          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <CheckIcon />
              <NotificationBadge
                count={tasks}
                effect={Effect.ROTATE_Y}
                style={{ backgroundColor: '#38a169' }}
              />
            </div>
            <div style={titleStyle}>Effect.ROTATE_Y</div>
            <div style={subtitleStyle}>Flips horizontally</div>
          </div>

          {/* Labels & Custom Styles */}
          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <UserIcon />
              <NotificationBadge
                count={friends > 0 ? 1 : 0}
                label={friends > 9 ? '9+' : friends.toString()}
                effect={Effect.SCALE}
                style={{
                  backgroundColor: '#805ad5',
                  borderRadius: '4px',
                  fontWeight: 'normal',
                  padding: '4px 6px'
                }}
              />
            </div>
            <div style={titleStyle}>Custom Label & Style</div>
            <div style={subtitleStyle}>Shows "9+" for counts &gt; 9</div>
          </div>

        </div>
      </div>

      <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
        <h3 style={{ marginTop: 0, color: '#444' }}>Triggers</h3>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
          Click the buttons below to trigger the badge animations across the different use cases.
        </p>

        <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button style={buttonStyle} onClick={() => setMessages(messages + 1)}>+1 Message</button>
          <button style={buttonStyle} onClick={() => setAlerts(alerts + 1)}>+1 Alert</button>
          <button style={buttonStyle} onClick={() => setTasks(tasks + 1)}>+1 Task</button>
          <button style={buttonStyle} onClick={() => setFriends(friends + 5)}>+5 Friends</button>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #eaeaea' }}>
          <button style={outlineButtonStyle} onClick={() => setMessages(0)}>Clear Messages</button>
          <button style={outlineButtonStyle} onClick={() => setAlerts(0)}>Clear Alerts</button>
          <button style={outlineButtonStyle} onClick={() => setTasks(0)}>Clear Tasks</button>
          <button style={outlineButtonStyle} onClick={() => setFriends(0)}>Clear Friends</button>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('out'));
root.render(<App />);

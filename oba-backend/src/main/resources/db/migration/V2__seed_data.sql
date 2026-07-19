-- V2: Seed sample data for development

INSERT INTO members (name, role, position, email, bio, batch) VALUES
    ('Pasan Perera',    'OFFICE_BEARER', 'President',          'president@ds2005.com',  'Leading the DSSC 2005 OBA with vision and commitment.', '2005'),
    ('Nuwan Silva',     'OFFICE_BEARER', 'Vice President',     'vp@ds2005.com',         'Dedicated to fostering unity among batch members.',     '2005'),
    ('Dinesh Fernando', 'OFFICE_BEARER', 'Secretary',          'secretary@ds2005.com',  'Keeping the OBA organised and running smoothly.',       '2005'),
    ('Kasun Jayasena',  'OFFICE_BEARER', 'Treasurer',          'treasurer@ds2005.com',  'Managing OBA finances responsibly.',                    '2005'),
    ('Asitha Weerasinghe', 'MEMBER',    NULL,                  NULL,                    NULL,                                                    '2005'),
    ('Ruwan Bandara',   'MEMBER',        NULL,                  NULL,                    NULL,                                                    '2005');

INSERT INTO events (title, description, event_date, location, status) VALUES
    ('Annual Reunion 2025',
     'The much-awaited annual reunion of the DSSC 2005 batch. A night of memories, music, and reconnecting with old friends.',
     '2025-12-20', 'Grand Ballroom, Colombo', 'UPCOMING'),
    ('Charity Cricket Match',
     'A friendly cricket match to raise funds for the school infrastructure development fund.',
     '2025-09-15', 'D.S. Senanayake College Grounds, Colombo', 'UPCOMING'),
    ('Batch Dinner 2024',
     'Our successful 2024 batch dinner brought together over 150 alumni for a memorable evening.',
     '2024-11-10', 'Hilton Colombo', 'PAST');

INSERT INTO projects (title, description, status, start_date, impact) VALUES
    ('School Computer Lab Renovation',
     'Funding and overseeing the renovation of the main computer laboratory at D.S. Senanayake College, providing modern computing facilities for current students.',
     'CURRENT', '2025-01-01',
     'Will benefit 500+ students per year with modern computing resources.'),
    ('2005 Batch Scholarship Fund',
     'Establishing an annual scholarship for outstanding students at D.S. Senanayake College, funded by voluntary contributions from our batch members.',
     'CURRENT', '2024-06-01',
     'Providing LKR 50,000 annual scholarships to deserving students.'),
    ('School Library Book Drive',
     'Collected and donated over 500 books to the school library, enriching the reading resources available to current students.',
     'COMPLETED', '2023-03-01', NULL);

INSERT INTO news_posts (title, content, author) VALUES
    ('Annual Reunion 2025 — Registration Now Open!',
     'We are thrilled to announce that registration for the DSSC 2005 Batch Annual Reunion 2025 is now officially open. This year''s reunion promises to be bigger and better than ever, with a special gala dinner, live entertainment, and surprise guests. Early bird tickets are available at a discounted rate. Contact us or visit our Facebook page to register.',
     'Secretary, DSSC 2005 OBA'),
    ('Computer Lab Renovation Project Update',
     'We are pleased to share that the Computer Lab Renovation project is progressing well. The new equipment has been procured and installation is scheduled for the coming month. We thank all members who contributed to the fundraiser — your generosity will benefit hundreds of students for years to come.',
     'Projects Committee');

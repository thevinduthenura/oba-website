-- V1: Create all tables for DSSC 2005 OBA Website

CREATE TABLE IF NOT EXISTS members (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(200) NOT NULL,
    role        VARCHAR(20)  NOT NULL CHECK (role IN ('OFFICE_BEARER', 'MEMBER')),
    position    VARCHAR(100),
    email       VARCHAR(200),
    phone       VARCHAR(30),
    image_url   TEXT,
    bio         TEXT,
    batch       VARCHAR(10)  DEFAULT '2005',
    linkedin_url TEXT,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS events (
    id                BIGSERIAL PRIMARY KEY,
    title             VARCHAR(300) NOT NULL,
    description       TEXT         NOT NULL,
    event_date        DATE         NOT NULL,
    location          VARCHAR(300) NOT NULL,
    status            VARCHAR(10)  NOT NULL CHECK (status IN ('UPCOMING', 'PAST')),
    image_url         TEXT,
    registration_url  TEXT,
    created_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS gallery_images (
    id          BIGSERIAL PRIMARY KEY,
    image_url   TEXT         NOT NULL,
    caption     VARCHAR(400),
    event_id    BIGINT       REFERENCES events(id) ON DELETE SET NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
    id          BIGSERIAL PRIMARY KEY,
    title       VARCHAR(300) NOT NULL,
    description TEXT         NOT NULL,
    status      VARCHAR(15)  NOT NULL CHECK (status IN ('CURRENT', 'COMPLETED')),
    image_url   TEXT,
    start_date  DATE         NOT NULL,
    end_date    DATE,
    impact      TEXT,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS news_posts (
    id           BIGSERIAL PRIMARY KEY,
    title        VARCHAR(400) NOT NULL,
    content      TEXT         NOT NULL,
    published_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    image_url    TEXT,
    author       VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(200) NOT NULL,
    email       VARCHAR(200) NOT NULL,
    subject     VARCHAR(400) NOT NULL,
    message     TEXT         NOT NULL,
    received_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

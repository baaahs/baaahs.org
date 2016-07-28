--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: assets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE assets (
    id integer NOT NULL,
    tag character varying NOT NULL,
    name character varying,
    notes character varying,
    state character varying,
    is_container boolean DEFAULT false,
    container_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: assets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE assets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE assets_id_seq OWNED BY assets.id;


--
-- Name: assets_labels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE assets_labels (
    id integer NOT NULL,
    asset_id integer NOT NULL,
    label_id integer NOT NULL
);


--
-- Name: assets_labels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE assets_labels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: assets_labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE assets_labels_id_seq OWNED BY assets_labels.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE events (
    id integer NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE events_id_seq OWNED BY events.id;


--
-- Name: labels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE labels (
    id integer NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: labels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE labels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE labels_id_seq OWNED BY labels.id;


--
-- Name: photos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE photos (
    id integer NOT NULL,
    asset_id integer NOT NULL,
    scan_id integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE photos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE photos_id_seq OWNED BY photos.id;


--
-- Name: scans; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE scans (
    id integer NOT NULL,
    asset_id integer NOT NULL,
    user_id integer,
    event_id integer,
    latitude numeric(10,6),
    longitude numeric(10,6),
    accuracy numeric(10,1),
    altitude numeric(10,6),
    altitude_accuracy numeric(10,1),
    container_scan_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: scans_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE scans_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: scans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE scans_id_seq OWNED BY scans.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE users (
    id integer NOT NULL,
    name character varying NOT NULL,
    email character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY assets ALTER COLUMN id SET DEFAULT nextval('assets_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY assets_labels ALTER COLUMN id SET DEFAULT nextval('assets_labels_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY events ALTER COLUMN id SET DEFAULT nextval('events_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY labels ALTER COLUMN id SET DEFAULT nextval('labels_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY scans ALTER COLUMN id SET DEFAULT nextval('scans_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: assets_labels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY assets_labels
    ADD CONSTRAINT assets_labels_pkey PRIMARY KEY (id);


--
-- Name: assets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY assets
    ADD CONSTRAINT assets_pkey PRIMARY KEY (id);


--
-- Name: events_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: labels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY labels
    ADD CONSTRAINT labels_pkey PRIMARY KEY (id);


--
-- Name: photos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: scans_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY scans
    ADD CONSTRAINT scans_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_assets_labels_on_asset_id_and_label_id; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_assets_labels_on_asset_id_and_label_id ON assets_labels USING btree (asset_id, label_id);


--
-- Name: index_assets_labels_on_label_id_and_asset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_assets_labels_on_label_id_and_asset_id ON assets_labels USING btree (label_id, asset_id);


--
-- Name: index_assets_on_container_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_assets_on_container_id ON assets USING btree (container_id);


--
-- Name: index_assets_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_assets_on_name ON assets USING btree (name);


--
-- Name: index_assets_on_state; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_assets_on_state ON assets USING btree (state);


--
-- Name: index_assets_on_tag; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_assets_on_tag ON assets USING btree (tag);


--
-- Name: index_labels_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_labels_on_name ON labels USING btree (name);


--
-- Name: index_photos_on_asset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_photos_on_asset_id ON photos USING btree (asset_id);


--
-- Name: index_photos_on_scan_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_photos_on_scan_id ON photos USING btree (scan_id);


--
-- Name: index_scans_on_asset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_scans_on_asset_id ON scans USING btree (asset_id);


--
-- Name: index_scans_on_container_scan_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_scans_on_container_scan_id ON scans USING btree (container_scan_id);


--
-- Name: index_scans_on_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_scans_on_created_at ON scans USING btree (created_at);


--
-- Name: index_scans_on_updated_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_scans_on_updated_at ON scans USING btree (updated_at);


--
-- Name: index_scans_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_scans_on_user_id ON scans USING btree (user_id);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_email ON users USING btree (email);


--
-- Name: index_users_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_name ON users USING btree (name);


--
-- Name: unique_schema_migrations; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX unique_schema_migrations ON schema_migrations USING btree (version);


--
-- Name: fk_rails_226edc1f39; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT fk_rails_226edc1f39 FOREIGN KEY (asset_id) REFERENCES assets(id);


--
-- Name: fk_rails_3395bfae95; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY scans
    ADD CONSTRAINT fk_rails_3395bfae95 FOREIGN KEY (container_scan_id) REFERENCES scans(id);


--
-- Name: fk_rails_805bef6743; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY assets_labels
    ADD CONSTRAINT fk_rails_805bef6743 FOREIGN KEY (asset_id) REFERENCES assets(id);


--
-- Name: fk_rails_8cfa33fcbd; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY assets
    ADD CONSTRAINT fk_rails_8cfa33fcbd FOREIGN KEY (container_id) REFERENCES assets(id);


--
-- Name: fk_rails_8f34995fbb; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY scans
    ADD CONSTRAINT fk_rails_8f34995fbb FOREIGN KEY (asset_id) REFERENCES assets(id);


--
-- Name: fk_rails_ac9cf29706; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY scans
    ADD CONSTRAINT fk_rails_ac9cf29706 FOREIGN KEY (event_id) REFERENCES events(id);


--
-- Name: fk_rails_ae43f03dd3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT fk_rails_ae43f03dd3 FOREIGN KEY (scan_id) REFERENCES scans(id);


--
-- Name: fk_rails_b8c552d48e; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY scans
    ADD CONSTRAINT fk_rails_b8c552d48e FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: fk_rails_fb1871eecc; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY assets_labels
    ADD CONSTRAINT fk_rails_fb1871eecc FOREIGN KEY (label_id) REFERENCES labels(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO schema_migrations (version) VALUES ('20160630213036');


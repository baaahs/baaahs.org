--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.2
-- Dumped by pg_dump version 9.5.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: lrhxbgwasfaatn
--

CREATE SCHEMA "public";


ALTER SCHEMA public OWNER TO lrhxbgwasfaatn;

--
-- Name: SCHEMA "public"; Type: COMMENT; Schema: -; Owner: lrhxbgwasfaatn
--

COMMENT ON SCHEMA "public" IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "plpgsql" WITH SCHEMA "pg_catalog";


--
-- Name: EXTENSION "plpgsql"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "plpgsql" IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

--
-- Name: assets; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "assets" (
    "id" integer NOT NULL,
    "tag" character varying NOT NULL,
    "name" character varying,
    "notes" character varying,
    "state" character varying,
    "is_container" boolean DEFAULT false,
    "container_id" integer,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL
);


ALTER TABLE public.assets OWNER TO lrhxbgwasfaatn;

--
-- Name: assets_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "assets_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.assets_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "assets_id_seq" OWNED BY "assets"."id";


--
-- Name: assets_labels; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "assets_labels" (
    "id" integer NOT NULL,
    "asset_id" integer NOT NULL,
    "label_id" integer NOT NULL
);


ALTER TABLE public.assets_labels OWNER TO lrhxbgwasfaatn;

--
-- Name: assets_labels_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "assets_labels_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.assets_labels_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: assets_labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "assets_labels_id_seq" OWNED BY "assets_labels"."id";


--
-- Name: events; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "events" (
    "id" integer NOT NULL,
    "name" character varying NOT NULL,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL
);


ALTER TABLE public.events OWNER TO lrhxbgwasfaatn;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "events_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "events_id_seq" OWNED BY "events"."id";


--
-- Name: labels; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "labels" (
    "id" integer NOT NULL,
    "name" character varying NOT NULL,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL
);


ALTER TABLE public.labels OWNER TO lrhxbgwasfaatn;

--
-- Name: labels_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "labels_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.labels_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "labels_id_seq" OWNED BY "labels"."id";


--
-- Name: packing_list_assets; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "packing_list_assets" (
    "id" integer NOT NULL,
    "packing_list_id" integer NOT NULL,
    "asset_id" integer NOT NULL,
    "email" character varying,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL
);


ALTER TABLE public.packing_list_assets OWNER TO lrhxbgwasfaatn;

--
-- Name: packing_list_assets_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "packing_list_assets_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.packing_list_assets_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: packing_list_assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "packing_list_assets_id_seq" OWNED BY "packing_list_assets"."id";


--
-- Name: packing_lists; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "packing_lists" (
    "id" integer NOT NULL,
    "name" character varying NOT NULL,
    "notes" character varying,
    "state" character varying,
    "creator_id" integer,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL
);


ALTER TABLE public.packing_lists OWNER TO lrhxbgwasfaatn;

--
-- Name: packing_lists_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "packing_lists_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.packing_lists_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: packing_lists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "packing_lists_id_seq" OWNED BY "packing_lists"."id";


--
-- Name: photos; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "photos" (
    "id" integer NOT NULL,
    "asset_id" integer NOT NULL,
    "scan_id" integer NOT NULL,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL
);


ALTER TABLE public.photos OWNER TO lrhxbgwasfaatn;

--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "photos_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photos_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "photos_id_seq" OWNED BY "photos"."id";


--
-- Name: scans; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "scans" (
    "id" integer NOT NULL,
    "asset_id" integer NOT NULL,
    "user_id" integer,
    "event_id" integer,
    "latitude" numeric(10,6),
    "longitude" numeric(10,6),
    "accuracy" numeric(10,1),
    "altitude" numeric(10,6),
    "altitude_accuracy" numeric(10,1),
    "container_scan_id" integer,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL,
    "into_container_id" integer
);


ALTER TABLE public.scans OWNER TO lrhxbgwasfaatn;

--
-- Name: scans_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "scans_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.scans_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: scans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "scans_id_seq" OWNED BY "scans"."id";


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "schema_migrations" (
    "version" character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO lrhxbgwasfaatn;

--
-- Name: users; Type: TABLE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE TABLE "users" (
    "id" integer NOT NULL,
    "name" character varying NOT NULL,
    "email" character varying,
    "created_at" timestamp without time zone NOT NULL,
    "updated_at" timestamp without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO lrhxbgwasfaatn;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE SEQUENCE "users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO lrhxbgwasfaatn;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER SEQUENCE "users_id_seq" OWNED BY "users"."id";


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "assets" ALTER COLUMN "id" SET DEFAULT "nextval"('"assets_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "assets_labels" ALTER COLUMN "id" SET DEFAULT "nextval"('"assets_labels_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "events" ALTER COLUMN "id" SET DEFAULT "nextval"('"events_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "labels" ALTER COLUMN "id" SET DEFAULT "nextval"('"labels_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "packing_list_assets" ALTER COLUMN "id" SET DEFAULT "nextval"('"packing_list_assets_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "packing_lists" ALTER COLUMN "id" SET DEFAULT "nextval"('"packing_lists_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "photos" ALTER COLUMN "id" SET DEFAULT "nextval"('"photos_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "scans" ALTER COLUMN "id" SET DEFAULT "nextval"('"scans_id_seq"'::"regclass");


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "users" ALTER COLUMN "id" SET DEFAULT "nextval"('"users_id_seq"'::"regclass");


--
-- Data for Name: assets; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "assets" ("id", "tag", "name", "notes", "state", "is_container", "container_id", "created_at", "updated_at") FROM stdin;
185	R3D	Panel R3D	\N	\N	f	\N	2016-08-13 21:54:14.537245	2016-08-13 21:54:14.537245
2	18P	Panel 18P	\N	\N	f	\N	2016-07-27 20:59:52.065024	2016-07-27 20:59:52.065024
3	F2P	Panel F2P	\N	\N	f	\N	2016-07-28 01:22:52.390458	2016-07-28 01:22:52.390458
4	F20D	Panel F20D	\N	\N	f	\N	2016-07-28 01:23:07.805118	2016-07-28 01:23:07.805118
5	8D	Panel 8D	\N	\N	f	\N	2016-07-28 01:23:15.858253	2016-07-28 01:23:15.858253
6	11D	Panel 11D	\N	\N	f	\N	2016-07-28 01:23:27.679067	2016-07-28 01:23:27.679067
7	11P	Panel 11P	\N	\N	f	\N	2016-07-31 03:24:02.898156	2016-07-31 03:24:02.898156
8	27P	Panel 27P	\N	\N	f	\N	2016-07-31 03:24:14.532863	2016-07-31 03:24:14.532863
9	41P	Panel 41P	\N	\N	f	\N	2016-07-31 03:24:44.95184	2016-07-31 03:24:44.95184
10	441	Head support platform L brace	\N	\N	f	\N	2016-08-06 22:41:17.150378	2016-08-06 22:42:02.551302
11	435	Head support platform R brace	\N	\N	f	\N	2016-08-06 22:42:13.733475	2016-08-06 22:42:28.682219
12	F17P	Panel F17P	\N	\N	f	\N	2016-08-07 21:03:45.895141	2016-08-07 21:03:45.895141
13	40P	Panel 40P	\N	\N	f	\N	2016-08-07 21:04:26.252893	2016-08-07 21:04:26.252893
14	35P	Panel 35P	\N	\N	f	\N	2016-08-07 21:04:36.719786	2016-08-07 21:04:36.719786
15	24P	Panel 24P	\N	\N	f	\N	2016-08-07 21:04:42.044196	2016-08-07 21:04:42.044196
16	F18P	Panel F18P	\N	\N	f	\N	2016-08-07 21:05:34.517512	2016-08-07 21:05:34.517512
17	7P	Panel 7P	\N	\N	f	\N	2016-08-07 21:12:18.037757	2016-08-07 21:12:18.037757
18	8P	Panel 8P	\N	\N	f	\N	2016-08-07 21:12:25.217708	2016-08-07 21:12:25.217708
19	13P	Panel 13P	\N	\N	f	\N	2016-08-07 21:25:56.060022	2016-08-07 21:25:56.060022
20	31P	Panel 31P	\N	\N	f	\N	2016-08-07 21:33:49.504415	2016-08-07 21:33:49.504415
21	39P	Panel 39P	\N	\N	f	\N	2016-08-07 21:45:39.791953	2016-08-07 21:45:39.791953
22	20P	Panel 20P	\N	\N	f	\N	2016-08-07 21:48:29.305886	2016-08-07 21:48:29.305886
23	28P	Panel 28P	\N	\N	f	\N	2016-08-07 21:59:57.044564	2016-08-07 21:59:57.044564
24	6P	Panel 6P	\N	\N	f	\N	2016-08-07 22:25:42.593613	2016-08-07 22:25:42.593613
25	23P	Panel 23P	\N	\N	f	\N	2016-08-07 22:52:11.983789	2016-08-07 22:52:11.983789
26	1P	Panel 1P	\N	\N	f	\N	2016-08-07 23:46:48.453197	2016-08-07 23:46:48.453197
27	33P	Panel 33P	\N	\N	f	\N	2016-08-08 00:10:04.629401	2016-08-08 00:10:04.629401
28	15P	Panel 15P	\N	\N	f	\N	2016-08-08 00:37:32.306217	2016-08-08 00:37:32.306217
29	F13P	Panel F13P	\N	\N	f	\N	2016-08-08 00:51:02.368053	2016-08-08 00:51:02.368053
30	42P	Panel 42P	\N	\N	f	\N	2016-08-08 01:18:23.959465	2016-08-08 01:18:23.959465
31	3D	Panel 3D	\N	\N	f	\N	2016-08-08 01:22:32.452275	2016-08-08 01:22:32.452275
32	25BP	Panel 25BP	\N	\N	f	\N	2016-08-08 01:33:53.108158	2016-08-08 01:33:53.108158
33	34P	Panel 34P	\N	\N	f	\N	2016-08-08 01:48:26.359974	2016-08-08 01:48:26.359974
34	F14P	Panel F14P	\N	\N	f	\N	2016-08-08 02:07:50.924856	2016-08-08 02:07:50.924856
35	R7P	Panel R7P	\N	\N	f	\N	2016-08-10 21:49:33.471469	2016-08-10 21:49:33.471469
36	30P	Panel 30P	\N	\N	f	\N	2016-08-10 21:56:00.121645	2016-08-10 21:56:00.121645
37	26P	Panel 26P	\N	\N	f	\N	2016-08-10 22:23:43.393742	2016-08-10 22:23:43.393742
38	F20P	Panel F20P	\N	\N	f	\N	2016-08-10 22:28:59.828694	2016-08-10 22:28:59.828694
39	12P	Panel 12P	\N	\N	f	\N	2016-08-10 22:30:05.195292	2016-08-10 22:30:05.195292
40	16P	Panel 16P	\N	\N	f	\N	2016-08-10 22:30:12.356387	2016-08-10 22:30:12.356387
41	32P	Panel 32P	\N	\N	f	\N	2016-08-10 22:33:50.517284	2016-08-10 22:33:50.517284
42	21P	Panel 21P	\N	\N	f	\N	2016-08-10 22:38:56.5489	2016-08-10 22:38:56.5489
43	F19P	Panel F19P	\N	\N	f	\N	2016-08-10 22:46:02.01306	2016-08-10 22:46:02.01306
44	2P	Panel 2P	\N	\N	f	\N	2016-08-10 22:53:25.247089	2016-08-10 22:53:25.247089
45	F4P	Panel F4P	\N	\N	f	\N	2016-08-10 23:03:01.150978	2016-08-10 23:03:01.150978
46	9P	Panel 9P	\N	\N	f	\N	2016-08-10 23:05:43.845553	2016-08-10 23:05:43.845553
47	R6P	Panel R6P	\N	\N	f	\N	2016-08-10 23:20:21.147883	2016-08-10 23:20:21.147883
48	R5P	Panel R5P	\N	\N	f	\N	2016-08-10 23:26:11.581976	2016-08-10 23:26:11.581976
49	F12P	Panel F12P	\N	\N	f	\N	2016-08-10 23:27:55.145413	2016-08-10 23:27:55.145413
50	14P	Panel 14P	\N	\N	f	\N	2016-08-10 23:30:00.548002	2016-08-10 23:30:00.548002
51	36P	Panel 36P	\N	\N	f	\N	2016-08-10 23:43:10.130546	2016-08-10 23:43:10.130546
52	F1P	Panel F1P	\N	\N	f	\N	2016-08-10 23:46:39.162607	2016-08-10 23:46:39.162607
53	37P	Panel 37P	\N	\N	f	\N	2016-08-10 23:59:02.689167	2016-08-10 23:59:02.689167
54	19BP	Panel 19BP	\N	\N	f	\N	2016-08-11 00:01:15.016977	2016-08-11 00:01:15.016977
55	R4P	Panel R4P	\N	\N	f	\N	2016-08-11 00:03:27.826433	2016-08-11 00:03:27.826433
56	F11	Panel F11	\N	\N	f	\N	2016-08-11 00:10:23.595583	2016-08-11 00:10:23.595583
57	R3P	Panel R3P	\N	\N	f	\N	2016-08-11 00:19:29.431889	2016-08-11 00:19:29.431889
58	R2P	Panel R2P	\N	\N	f	\N	2016-08-11 00:31:33.174363	2016-08-11 00:31:33.174363
59	F10D	Panel F10D	\N	\N	f	\N	2016-08-11 00:34:03.918194	2016-08-11 00:34:03.918194
60	F13D	Panel F13D	\N	\N	f	\N	2016-08-11 00:36:22.66565	2016-08-11 00:36:22.66565
61	R5D	Panel R5D	\N	\N	f	\N	2016-08-11 00:37:54.921215	2016-08-11 00:37:54.921215
62	F14D	Panel F14D	\N	\N	f	\N	2016-08-11 00:51:00.575071	2016-08-11 00:51:00.575071
63	33D	Panel 33D	\N	\N	f	\N	2016-08-11 00:54:47.501267	2016-08-11 00:54:47.501267
64	F7D	Panel F7D	\N	\N	f	\N	2016-08-11 00:57:17.456134	2016-08-11 00:57:17.456134
1	test	Test item	\N	\N	f	\N	2016-07-26 17:34:15.987592	2016-08-12 06:28:47.501661
66	101	Table Folding 6' x 3'	\N	\N	f	\N	2016-08-13 04:11:36.987578	2016-08-13 04:11:36.987578
67	102	Galaxy Refrigerator	\N	\N	f	\N	2016-08-13 04:11:37.071623	2016-08-13 04:11:37.071623
68	103	Easy up awning	\N	\N	f	\N	2016-08-13 04:11:37.155423	2016-08-13 04:11:37.155423
78	113	Green cooler	\N	\N	f	\N	2016-08-13 04:11:37.995879	2016-08-13 04:11:37.995879
79	114	5 gal orange coleman jug	\N	\N	f	\N	2016-08-13 04:11:38.076323	2016-08-13 04:11:38.076323
80	115	5 gal orange home depot jug	\N	\N	f	\N	2016-08-13 04:11:38.165951	2016-08-13 04:11:38.165951
81	116	Red coffee plastic thermos container	\N	\N	f	\N	2016-08-13 04:11:38.255817	2016-08-13 04:11:38.255817
82	117	2 gal small blue jug	\N	\N	f	\N	2016-08-13 04:11:38.344787	2016-08-13 04:11:38.344787
83	118	5 gal orange coleman jug	\N	\N	f	\N	2016-08-13 04:11:38.438673	2016-08-13 04:11:38.438673
84	119	5 gal orange home depot jug	\N	\N	f	\N	2016-08-13 04:11:38.524765	2016-08-13 04:11:38.524765
85	120	Green water container	\N	\N	f	\N	2016-08-13 04:11:38.604363	2016-08-13 04:11:38.604363
86	121	Green water container	\N	\N	f	\N	2016-08-13 04:11:38.686433	2016-08-13 04:11:38.686433
87	122	5 gal orange home depot jug	\N	\N	f	\N	2016-08-13 04:11:38.770555	2016-08-13 04:11:38.770555
88	123	Blue cooler coleman	\N	\N	f	\N	2016-08-13 04:11:38.866844	2016-08-13 04:11:38.866844
89	124	Small blue cooler, rubbermaind	\N	\N	f	\N	2016-08-13 04:11:38.962635	2016-08-13 04:11:38.962635
90	125	Black trashcan	\N	\N	f	\N	2016-08-13 04:11:39.08387	2016-08-13 04:11:39.08387
91	126	Black trashcan	\N	\N	f	\N	2016-08-13 04:11:39.181231	2016-08-13 04:11:39.181231
92	127	Black trashcan	\N	\N	f	\N	2016-08-13 04:11:39.261525	2016-08-13 04:11:39.261525
93	128	Dual propane burners	\N	\N	f	\N	2016-08-13 04:11:39.352091	2016-08-13 04:11:39.352091
94	129	Grill	\N	\N	f	\N	2016-08-13 04:11:39.466714	2016-08-13 04:11:39.466714
96	131	Water pup	\N	\N	f	\N	2016-08-13 04:11:39.641896	2016-08-13 04:11:39.641896
98	134	Table, folding, 6' x 3'	\N	\N	f	\N	2016-08-13 04:11:39.827659	2016-08-13 04:11:39.827659
99	135	Mixer, xone:23	\N	\N	f	\N	2016-08-13 04:11:39.91263	2016-08-13 04:11:39.91263
95	130	Water barrel	\N	\N	f	155	2016-08-13 04:11:39.561186	2016-08-13 20:15:33.078613
97	133	Water barrel	\N	\N	f	155	2016-08-13 04:11:39.733639	2016-08-13 20:19:36.059701
73	108	Platform art, fisting from right	\N	\N	f	155	2016-08-13 04:11:37.565921	2016-08-13 20:40:53.722327
72	107	Platform art, shooting to the left	\N	\N	f	155	2016-08-13 04:11:37.485979	2016-08-13 20:41:00.821824
71	106	Platform art, shooting to the right	\N	\N	f	155	2016-08-13 04:11:37.404221	2016-08-13 20:41:11.920124
76	111	Platform art, Eyeball on left	\N	\N	f	155	2016-08-13 04:11:37.819816	2016-08-13 20:41:24.742821
75	110	Platform art, fisting from left	\N	\N	f	155	2016-08-13 04:11:37.738688	2016-08-13 20:41:35.97191
74	109	Platform art, 3 assholes	\N	\N	f	155	2016-08-13 04:11:37.656537	2016-08-13 20:41:43.397547
70	105	Platform art, Control panel, joystick on left	\N	\N	f	155	2016-08-13 04:11:37.322563	2016-08-13 20:41:49.224056
69	104	Platform art, Control panel, joystick on right	\N	\N	f	155	2016-08-13 04:11:37.243372	2016-08-13 20:41:59.84317
77	112	Platform art, Eyeball on right	\N	\N	f	155	2016-08-13 04:11:37.909415	2016-08-13 20:42:19.689808
186	13D	Panel 13D	\N	\N	f	\N	2016-08-13 21:55:57.586912	2016-08-13 21:55:57.586912
187	F12D	Panel F12D	\N	\N	f	\N	2016-08-13 21:56:06.065163	2016-08-13 21:56:06.065163
103	139	Barn Scrim, Middle	\N	\N	f	\N	2016-08-13 04:11:40.27753	2016-08-13 04:11:40.27753
104	140	Barn Scrim, Lower	\N	\N	f	\N	2016-08-13 04:11:40.368951	2016-08-13 04:11:40.368951
188	12D	Panel 12D	\N	\N	f	\N	2016-08-13 21:56:18.366295	2016-08-13 21:56:18.366295
107	158	Sharpie 17R w/ Pink tag	\N	\N	f	\N	2016-08-13 04:11:40.634666	2016-08-13 04:11:40.634666
108	159	Sharpie 17R w/ no tag	\N	\N	f	\N	2016-08-13 04:11:40.719644	2016-08-13 04:11:40.719644
109	160	Sharpie 17R case	\N	\N	f	\N	2016-08-13 04:11:40.806967	2016-08-13 04:11:40.806967
110	161	Generator for camp	\N	\N	f	\N	2016-08-13 04:11:40.891822	2016-08-13 04:11:40.891822
111	163	Wood Box for Letters	\N	\N	f	\N	2016-08-13 04:11:40.973136	2016-08-13 04:11:40.973136
112	164	BAAAHS Sign - B	\N	\N	f	\N	2016-08-13 04:11:41.055724	2016-08-13 04:11:41.055724
113	165	BAAAHS Sign - A	\N	\N	f	\N	2016-08-13 04:11:41.13838	2016-08-13 04:11:41.13838
114	166	BAAAHS Sign - A	\N	\N	f	\N	2016-08-13 04:11:41.231693	2016-08-13 04:11:41.231693
115	167	BAAAHS Sign - A	\N	\N	f	\N	2016-08-13 04:11:41.320442	2016-08-13 04:11:41.320442
116	168	BAAAHS Sign - H	\N	\N	f	\N	2016-08-13 04:11:41.420289	2016-08-13 04:11:41.420289
117	169	BAAAHS Sign - S	\N	\N	f	\N	2016-08-13 04:11:41.509814	2016-08-13 04:11:41.509814
118	170	LED Light Panel for DJ	\N	\N	f	\N	2016-08-13 04:11:41.600685	2016-08-13 04:11:41.600685
189	549	Solar lights box	\N	\N	f	155	2016-08-13 21:56:19.164341	2016-08-13 21:56:27.357484
190	F18D	Panel F18D	\N	\N	f	\N	2016-08-13 21:56:28.173342	2016-08-13 21:56:28.173342
191	16D	Panel 16D	\N	\N	f	\N	2016-08-13 21:56:34.577078	2016-08-13 21:56:34.577078
123	403	Metal poles for crane cross beam	\N	\N	f	\N	2016-08-13 04:11:42.089394	2016-08-13 04:11:42.089394
124	404	Metal pole for A of A Frame	\N	\N	f	\N	2016-08-13 04:11:42.179793	2016-08-13 04:11:42.179793
127	408	Metal pole for back stair support	\N	\N	f	\N	2016-08-13 04:11:42.465975	2016-08-13 04:11:42.465975
129	409	Metal pole for back stair support	\N	\N	f	\N	2016-08-13 04:11:42.650424	2016-08-13 04:11:42.650424
130	410	Sharpie stand base	\N	\N	f	\N	2016-08-13 04:11:42.733103	2016-08-13 04:11:42.733103
131	411	Sharpie stand base	\N	\N	f	\N	2016-08-13 04:11:42.818668	2016-08-13 04:11:42.818668
133	415	Tutu piece rolled and bundled	\N	\N	f	\N	2016-08-13 04:11:42.99766	2016-08-13 04:11:42.99766
134	443	Speaker QSC K10 Monitor	\N	\N	f	\N	2016-08-13 04:11:43.085387	2016-08-13 04:11:43.085387
135	446	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:43.175238	2016-08-13 04:11:43.175238
136	447	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:43.271933	2016-08-13 04:11:43.271933
137	449	DBX DriveRack PA	\N	\N	f	\N	2016-08-13 04:11:43.36924	2016-08-13 04:11:43.36924
138	452	Speaker QSC KW152 Top	\N	\N	f	\N	2016-08-13 04:11:43.454248	2016-08-13 04:11:43.454248
139	453	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:43.543318	2016-08-13 04:11:43.543318
140	455	DBX DriveRack PA Bag	\N	\N	f	\N	2016-08-13 04:11:43.624979	2016-08-13 04:11:43.624979
141	458	Speaker QSC KW152 Top	\N	\N	f	\N	2016-08-13 04:11:43.706098	2016-08-13 04:11:43.706098
142	459	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:43.787632	2016-08-13 04:11:43.787632
143	461	TP Link Wifi Hotspot	\N	\N	f	\N	2016-08-13 04:11:43.892771	2016-08-13 04:11:43.892771
144	464	Speaker QSC KW153 Mid	\N	\N	f	\N	2016-08-13 04:11:43.984902	2016-08-13 04:11:43.984902
145	465	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:44.066576	2016-08-13 04:11:44.066576
146	467	Blue bin with audio cables	\N	\N	f	\N	2016-08-13 04:11:44.149499	2016-08-13 04:11:44.149499
147	470	Speaker QSC KW153 Mid	\N	\N	f	\N	2016-08-13 04:11:44.239409	2016-08-13 04:11:44.239409
148	471	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:44.323892	2016-08-13 04:11:44.323892
149	473	TP Link Wifi Hotspot	\N	\N	f	\N	2016-08-13 04:11:44.419061	2016-08-13 04:11:44.419061
150	476	Speaker QSC K10 Monitor	\N	\N	f	\N	2016-08-13 04:11:44.503488	2016-08-13 04:11:44.503488
151	477	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:44.582632	2016-08-13 04:11:44.582632
152	482	Speaker QSC K10 Monitor	\N	\N	f	\N	2016-08-13 04:11:44.664956	2016-08-13 04:11:44.664956
153	483	Speaker QSC KW181 Subwoofer	\N	\N	f	\N	2016-08-13 04:11:44.744903	2016-08-13 04:11:44.744903
154	526	Couch	\N	\N	f	\N	2016-08-13 19:38:47.589359	2016-08-13 19:38:59.528604
155	171	Truck	\N	\N	f	\N	2016-08-13 19:40:22.885653	2016-08-13 19:40:31.434891
105	156	Bike parking fence	\N	\N	f	155	2016-08-13 04:11:40.462611	2016-08-13 19:41:00.869753
156	527	Couch	\N	\N	f	155	2016-08-13 19:43:22.72597	2016-08-13 19:43:28.593002
157	528	Couch	\N	\N	f	155	2016-08-13 19:44:16.003445	2016-08-13 19:44:40.031091
106	157	Bike parking fence	\N	\N	f	155	2016-08-13 04:11:40.54524	2016-08-13 19:45:09.08505
158	532	Comfy chair 	\N	\N	f	155	2016-08-13 19:48:33.79798	2016-08-13 19:49:11.235941
159	533	Couch corner	\N	\N	f	155	2016-08-13 19:49:43.017158	2016-08-13 19:49:56.68196
160	534	Couch corner	\N	\N	f	155	2016-08-13 19:50:10.911466	2016-08-13 19:50:24.588872
161	529	Couch seat	\N	\N	f	155	2016-08-13 19:52:20.724583	2016-08-13 19:52:37.61161
119	400	Tutu piece rolled and bundled	\N	\N	f	155	2016-08-13 04:11:41.689351	2016-08-13 19:53:24.010552
126	406	Tutu piece rolled and bundled	\N	\N	f	155	2016-08-13 04:11:42.371285	2016-08-13 19:53:41.940537
132	412	Tutu piece rolled and bundled	\N	\N	f	155	2016-08-13 04:11:42.904649	2016-08-13 19:53:57.928464
162	530	Tutu rolled and bundled 	\N	\N	f	155	2016-08-13 19:55:20.506501	2016-08-13 19:55:29.69476
163	418	Tutu rolled and bundled	\N	\N	f	155	2016-08-13 19:55:47.129785	2016-08-13 19:55:55.672147
164	424	Tutu rolled and bundled	\N	\N	f	155	2016-08-13 19:56:14.555249	2016-08-13 19:56:23.949516
120	401	Nose Ring	\N	\N	f	155	2016-08-13 04:11:41.785808	2016-08-13 19:56:46.664711
165	531	Box of rope	\N	\N	f	155	2016-08-13 20:01:49.197007	2016-08-13 20:02:04.014978
166	538	Unicorn horn	\N	\N	f	155	2016-08-13 20:03:27.915158	2016-08-13 20:03:33.687301
167	539	Wooden chairs x4	\N	\N	f	155	2016-08-13 20:11:26.203884	2016-08-13 20:11:38.965784
100	136	Table, 4' x 2' Particle board	\N	\N	f	155	2016-08-13 04:11:40.001944	2016-08-13 20:42:30.426701
168	172	Bounce box of netting	\N	\N	f	155	2016-08-13 20:45:56.774267	2016-08-13 20:46:17.737494
169	540	Camp chair	\N	\N	f	155	2016-08-13 20:47:10.942755	2016-08-13 20:47:17.646744
170	174	Quonset shade cloth	\N	\N	f	155	2016-08-13 20:48:08.497965	2016-08-13 20:48:16.893619
171	535	Shade umbrella 	\N	\N	f	155	2016-08-13 20:50:26.558604	2016-08-13 20:50:35.086741
172	176	Bag of camp chairs	\N	\N	f	155	2016-08-13 20:53:28.246377	2016-08-13 20:53:36.552624
102	138	Hammock in box	\N	\N	f	155	2016-08-13 04:11:40.18885	2016-08-13 20:54:02.647097
173	536	Camp table (foldable)	\N	\N	f	155	2016-08-13 21:03:58.170609	2016-08-13 21:04:08.468949
174	178	Camp table (boxy bag)	\N	\N	f	155	2016-08-13 21:04:52.62915	2016-08-13 21:05:03.763104
175	537	Camp chair	\N	\N	f	155	2016-08-13 21:28:14.469748	2016-08-13 21:28:20.289056
176	541	Camp chair	\N	\N	f	155	2016-08-13 21:29:45.242358	2016-08-13 21:29:53.744382
177	542	Silver tubing ring	\N	\N	f	155	2016-08-13 21:31:04.286568	2016-08-13 21:31:11.694109
178	543	Silver tubing ring	\N	\N	f	155	2016-08-13 21:31:48.142884	2016-08-13 21:31:58.011126
179	173	BAAAHS station living room box	\N	\N	f	155	2016-08-13 21:33:02.074236	2016-08-13 21:33:15.127824
180	544	Camp chair	\N	\N	f	155	2016-08-13 21:34:03.429014	2016-08-13 21:34:10.174005
181	545	Instant canopy	\N	\N	f	155	2016-08-13 21:35:42.723847	2016-08-13 21:35:51.522
122	403	Tutu piece rolled and bundled	\N	\N	f	155	2016-08-13 04:11:41.974246	2016-08-13 21:37:32.05768
125	405	Metal poles for crane cross beam	\N	\N	f	155	2016-08-13 04:11:42.277035	2016-08-13 21:38:07.463099
121	402	Metal pole for A of A Frame	\N	\N	f	155	2016-08-13 04:11:41.879074	2016-08-13 21:38:36.145868
182	546	Instant Canopy	\N	\N	f	155	2016-08-13 21:39:06.003425	2016-08-13 21:39:14.611381
128	409	Tutu piece rolled and bundled	\N	\N	f	155	2016-08-13 04:11:42.550019	2016-08-13 21:40:05.209083
183	547	Hancock chair	\N	\N	f	155	2016-08-13 21:42:32.414802	2016-08-13 21:42:41.854323
184	548	Folding table	\N	\N	f	155	2016-08-13 21:43:27.675459	2016-08-13 21:43:39.357226
192	R4D	Panel R4D	\N	\N	f	\N	2016-08-13 21:56:44.643069	2016-08-13 21:56:44.643069
193	22D	Panel 22D	\N	\N	f	\N	2016-08-13 21:56:55.072312	2016-08-13 21:56:55.072312
194	4D	Panel 4D	\N	\N	f	\N	2016-08-13 22:00:11.652425	2016-08-13 22:00:11.652425
195	F19D	Panel F19D	\N	\N	f	\N	2016-08-13 22:00:47.40532	2016-08-13 22:00:47.40532
196	25D	Panel 25D	\N	\N	f	\N	2016-08-13 22:00:56.267878	2016-08-13 22:00:56.267878
197	41D	Panel 41D	\N	\N	f	\N	2016-08-13 22:03:20.056057	2016-08-13 22:03:20.056057
198	F2D	Panel F2D	\N	\N	f	\N	2016-08-13 22:04:06.621548	2016-08-13 22:04:06.621548
199	9D	Panel 9D	\N	\N	f	\N	2016-08-13 22:10:25.209972	2016-08-13 22:10:25.209972
200	1D	Panel 1D	\N	\N	f	\N	2016-08-13 22:16:05.513897	2016-08-13 22:16:05.513897
65	100	Table, 4' x 2'	\N	\N	f	155	2016-08-13 04:11:36.897876	2016-08-13 22:18:51.327665
101	137	Old sharpy case	\N	\N	f	155	2016-08-13 04:11:40.094842	2016-08-13 22:19:14.583813
201	30D	Panel 30D	\N	\N	f	\N	2016-08-13 22:22:19.770054	2016-08-13 22:22:19.770054
202	32D	Panel 32D	\N	\N	f	\N	2016-08-13 22:23:56.954283	2016-08-13 22:23:56.954283
203	550	Camp lights	\N	\N	f	155	2016-08-13 22:26:19.467554	2016-08-13 22:26:27.771081
204	551	Camp lights pin spots	\N	\N	f	155	2016-08-13 22:26:33.016515	2016-08-13 22:26:50.305126
205	34D	Panel 34D	\N	\N	f	\N	2016-08-13 22:31:25.501362	2016-08-13 22:31:25.501362
206	23D	Panel 23D	\N	\N	f	\N	2016-08-13 22:32:18.882312	2016-08-13 22:32:18.882312
207	27D	Panel 27D	\N	\N	f	\N	2016-08-13 22:35:36.413035	2016-08-13 22:35:36.413035
208	39D	Panel 39D	\N	\N	f	\N	2016-08-13 22:35:42.35729	2016-08-13 22:35:42.35729
209	180	Bucket of eight silver metal carport feet	\N	\N	f	155	2016-08-13 23:53:34.033112	2016-08-13 23:53:59.535552
210	492	Silver metal carport joints	\N	\N	f	155	2016-08-13 23:54:33.03851	2016-08-13 23:54:50.749703
211	491	Silver metal carport joints	\N	\N	f	155	2016-08-13 23:54:55.860688	2016-08-13 23:55:06.628647
212	490	Silver metal carport joints	\N	\N	f	155	2016-08-13 23:55:11.318741	2016-08-13 23:55:20.336838
213	497	Silver metal carport tube supports	\N	\N	f	155	2016-08-13 23:55:45.693801	2016-08-13 23:56:06.522847
214	486	Silver metal carport tube supports	\N	\N	f	155	2016-08-13 23:56:21.124822	2016-08-13 23:56:37.638367
215	485	Silver metal carport tube supports	\N	\N	f	155	2016-08-13 23:56:47.2619	2016-08-13 23:57:02.609303
216	484	Silver metal carport tube supports 	\N	\N	f	155	2016-08-13 23:57:08.909292	2016-08-13 23:57:24.501581
217	498	Silver metal carport tarp covering	\N	\N	f	155	2016-08-13 23:58:07.023247	2016-08-13 23:58:20.526931
218	496	Silver metal carport tarp covering	\N	\N	f	155	2016-08-13 23:58:28.186389	2016-08-13 23:58:42.835028
219	20D	Panel 20D	\N	\N	f	\N	2016-08-14 00:37:24.148108	2016-08-14 00:37:24.148108
220	24D	Panel 24D	\N	\N	f	\N	2016-08-14 00:39:23.981348	2016-08-14 00:39:23.981348
221	42D	Panel 42D	\N	\N	f	\N	2016-08-14 00:40:22.635045	2016-08-14 00:40:22.635045
222	7D	Panel 7D	\N	\N	f	\N	2016-08-14 00:41:04.792866	2016-08-14 00:41:04.792866
223	F6D	Panel F6D	\N	\N	f	\N	2016-08-14 00:42:05.560287	2016-08-14 00:42:05.560287
224	F4D	Panel F4D	\N	\N	f	\N	2016-08-14 00:42:22.449191	2016-08-14 00:42:22.449191
225	14D	Panel 14D	\N	\N	f	\N	2016-08-14 00:42:29.218934	2016-08-14 00:42:29.218934
226	R7D	Panel R7D	\N	\N	f	\N	2016-08-14 00:42:37.253957	2016-08-14 00:42:37.253957
227	5D	Panel 5D	\N	\N	f	\N	2016-08-14 00:43:36.67548	2016-08-14 00:43:36.67548
228	R6D	Panel R6D	\N	\N	f	\N	2016-08-14 00:44:21.64696	2016-08-14 00:44:21.64696
229	F16D	Panel F16D	\N	\N	f	\N	2016-08-14 00:44:44.441747	2016-08-14 00:44:44.441747
230	29D	Panel 29D	\N	\N	f	\N	2016-08-14 00:45:24.705373	2016-08-14 00:45:24.705373
231	40D	Panel 40D	\N	\N	f	\N	2016-08-14 00:45:48.320429	2016-08-14 00:45:48.320429
232	36D	Panel 36D	\N	\N	f	\N	2016-08-14 00:46:02.251081	2016-08-14 00:46:02.251081
233	15D	Panel 15D	\N	\N	f	\N	2016-08-14 00:46:23.30119	2016-08-14 00:46:23.30119
234	17D	Panel 17D	\N	\N	f	\N	2016-08-14 00:46:42.788653	2016-08-14 00:46:42.788653
235	31D	Panel 31D	\N	\N	f	\N	2016-08-14 00:46:55.398847	2016-08-14 00:46:55.398847
236	37D	Panel 37D	\N	\N	f	\N	2016-08-14 00:47:23.319398	2016-08-14 00:47:23.319398
237	28D	Panel 28D	\N	\N	f	\N	2016-08-14 00:47:42.688244	2016-08-14 00:47:42.688244
238	18D	Panel 18D	\N	\N	f	\N	2016-08-14 00:48:55.745982	2016-08-14 00:48:55.745982
239	43D	Panel 43D	\N	\N	f	\N	2016-08-14 00:49:07.89571	2016-08-14 00:49:07.89571
240	442	Mixer, Pioneer DJM-900 Nexus	\N	\N	f	\N	2016-08-14 08:08:25.631364	2016-08-14 08:08:59.341618
241	448	CDJ 850 Silver, Working	\N	\N	f	\N	2016-08-14 08:10:14.065801	2016-08-14 08:10:37.008
242	454	CDJ 850 Black	\N	\N	f	\N	2016-08-14 08:11:29.722005	2016-08-14 08:12:10.281396
243	460	CDJ 850 Silver Blown amp	\N	\N	f	\N	2016-08-14 08:13:15.820087	2016-08-14 08:13:32.607963
244	466	Mixer Pioneer DJM-700	\N	\N	f	\N	2016-08-14 08:15:01.835554	2016-08-14 08:15:20.642478
245	472	Mixer Pioneer DJM-400 	\N	\N	f	\N	2016-08-14 08:16:16.277701	2016-08-14 08:16:39.908036
246	17P	Panel 17P	\N	\N	f	\N	2016-08-14 18:19:37.652277	2016-08-14 18:19:37.652277
247	F3P	Panel F3P	\N	\N	f	\N	2016-08-14 18:40:49.587097	2016-08-14 18:40:49.587097
248	35D	Panel 35D	\N	\N	f	\N	2016-08-14 18:52:10.721885	2016-08-14 18:52:10.721885
249	F3D	Panel F3D	\N	\N	f	\N	2016-08-14 19:13:32.334101	2016-08-14 19:13:32.334101
250	2D	Panel 2D	\N	\N	f	\N	2016-08-14 19:13:48.920472	2016-08-14 19:13:48.920472
251	F15	Unknown	\N	\N	f	\N	2016-08-14 19:26:24.998347	2016-08-14 19:26:24.998347
254	183	Shower scaffold 2 of 5	\N	\N	f	252	2016-08-14 20:38:38.327085	2016-08-14 20:39:04.417233
255	179	Shower scaffold 3 of 5	\N	\N	f	252	2016-08-14 20:39:44.859184	2016-08-14 20:39:55.928367
256	181	Shower scaffold 4 of 5	\N	\N	f	252	2016-08-14 20:40:35.960709	2016-08-14 20:40:46.737957
257	175	Shower scaffold (base) 5 of 5	\N	\N	f	252	2016-08-14 20:42:04.656655	2016-08-14 20:42:20.005095
253	177	Shower Scaffold 1 of 5	\N	\N	f	252	2016-08-14 20:36:48.784806	2016-08-14 20:43:09.266361
252	182	Camp Shower Parts (Bin)	\N	\N	f	\N	2016-08-14 20:33:37.193115	2016-08-14 20:44:16.993989
258	565	Shower Pole 1 of 2	\N	\N	f	\N	2016-08-14 20:46:51.181467	2016-08-14 20:47:01.377892
259	566	Shower Pole 2 of 2	\N	\N	f	\N	2016-08-14 20:47:07.770083	2016-08-14 20:47:15.678395
260	559	Shower Pump (Fresh Water)	\N	\N	f	\N	2016-08-14 20:48:49.436682	2016-08-14 20:49:44.812771
261	560	Shower Pump (Grey Water)	\N	\N	f	\N	2016-08-14 20:50:33.37877	2016-08-14 20:50:51.4372
263	423	Right speaker shelf	\N	\N	f	\N	2016-08-14 21:56:20.893234	2016-08-14 21:56:32.260497
264	417	Center speaker platform	\N	\N	f	\N	2016-08-14 21:58:47.210121	2016-08-14 21:58:55.686497
262	429	Generator shelf	\N	\N	f	\N	2016-08-14 21:54:59.115583	2016-08-14 22:00:06.609451
265	552	Head support stud (driver side)	\N	\N	f	\N	2016-08-15 01:44:22.483238	2016-08-15 01:45:00.295361
266	556	Head support stud (passenger side)	\N	\N	f	\N	2016-08-15 01:45:08.603134	2016-08-15 01:45:19.232844
267	567	White cooler	\N	\N	f	\N	2016-08-15 01:56:21.300237	2016-08-15 01:56:30.662369
268	R2D	Panel R2D	\N	\N	f	\N	2016-08-15 02:00:22.41347	2016-08-15 02:00:22.41347
269	F5D	Panel F5D	\N	\N	f	\N	2016-08-15 02:00:41.508275	2016-08-15 02:00:41.508275
270	26D	Panel 26D	\N	\N	f	\N	2016-08-15 02:00:57.202536	2016-08-15 02:00:57.202536
271	6D	Panel 6D	\N	\N	f	\N	2016-08-15 02:07:27.976543	2016-08-15 02:07:27.976543
272	21D	Panel 21D	\N	\N	f	\N	2016-08-15 02:08:50.731024	2016-08-15 02:08:50.731024
273	R1	Unknown	\N	\N	f	\N	2016-08-15 02:10:27.523912	2016-08-15 02:10:27.523912
274	F17D	Panel F17D	\N	\N	f	\N	2016-08-15 02:11:58.88053	2016-08-15 02:11:58.88053
275	43P	Panel 43P	\N	\N	f	\N	2016-08-15 02:12:18.747238	2016-08-15 02:12:18.747238
276	F16P	Panel F16P	\N	\N	f	\N	2016-08-15 02:15:01.978609	2016-08-15 02:15:01.978609
277	F10P	Panel F10P	\N	\N	f	\N	2016-08-15 02:15:43.879641	2016-08-15 02:15:43.879641
278	29P	Panel 29P	\N	\N	f	\N	2016-08-15 02:17:48.129031	2016-08-15 02:17:48.129031
279	25AP	Panel 25AP	\N	\N	f	\N	2016-08-15 02:21:15.479127	2016-08-15 02:21:15.479127
280	F1D	Panel F1D	\N	\N	f	\N	2016-08-15 02:21:22.790207	2016-08-15 02:21:22.790207
281	4P	Panel 4P	\N	\N	f	\N	2016-08-15 02:21:38.10017	2016-08-15 02:21:38.10017
282	3P	Panel 3P	\N	\N	f	\N	2016-08-15 02:24:30.487168	2016-08-15 02:24:30.487168
283	22P	Panel 22P	\N	\N	f	\N	2016-08-15 02:24:40.250888	2016-08-15 02:24:40.250888
284	19AP	Panel 19AP	\N	\N	f	\N	2016-08-15 02:25:15.390031	2016-08-15 02:25:15.390031
285	555	Back stair support 1 of 2	\N	\N	f	\N	2016-08-15 02:34:53.232338	2016-08-15 02:35:04.995644
286	557	Back stair support 2 of 2	\N	\N	f	\N	2016-08-15 02:35:31.700521	2016-08-15 02:35:44.034116
287	554	Platform 	\N	\N	f	\N	2016-08-15 02:35:55.025509	2016-08-15 02:36:03.686743
288	561	Platform 	\N	\N	f	\N	2016-08-15 02:36:43.210838	2016-08-15 02:36:57.888393
289	564	Shepherd's hook base	\N	\N	f	\N	2016-08-15 02:37:41.138851	2016-08-15 02:38:09.953198
\.


--
-- Name: assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"assets_id_seq"', 289, true);


--
-- Data for Name: assets_labels; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "assets_labels" ("id", "asset_id", "label_id") FROM stdin;
\.


--
-- Name: assets_labels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"assets_labels_id_seq"', 1, false);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "events" ("id", "name", "created_at", "updated_at") FROM stdin;
1	Panels	2016-07-31 03:21:54.372696	2016-07-31 03:21:54.372696
2	NIMBY build	2016-08-06 22:41:09.355766	2016-08-06 22:41:09.355766
3	Lights on panels	2016-08-07 21:03:34.542998	2016-08-07 21:03:34.542998
4	Loading truck at nimby 	2016-08-13 19:29:31.490346	2016-08-13 19:29:31.490346
5	Tom's House of Repair	2016-08-14 08:05:53.274217	2016-08-14 08:05:53.274217
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"events_id_seq"', 5, true);


--
-- Data for Name: labels; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "labels" ("id", "name", "created_at", "updated_at") FROM stdin;
\.


--
-- Name: labels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"labels_id_seq"', 1, false);


--
-- Data for Name: packing_list_assets; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "packing_list_assets" ("id", "packing_list_id", "asset_id", "email", "created_at", "updated_at") FROM stdin;
\.


--
-- Name: packing_list_assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"packing_list_assets_id_seq"', 1, false);


--
-- Data for Name: packing_lists; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "packing_lists" ("id", "name", "notes", "state", "creator_id", "created_at", "updated_at") FROM stdin;
\.


--
-- Name: packing_lists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"packing_lists_id_seq"', 1, false);


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "photos" ("id", "asset_id", "scan_id", "created_at", "updated_at") FROM stdin;
\.


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"photos_id_seq"', 1, false);


--
-- Data for Name: scans; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "scans" ("id", "asset_id", "user_id", "event_id", "latitude", "longitude", "accuracy", "altitude", "altitude_accuracy", "container_scan_id", "created_at", "updated_at", "into_container_id") FROM stdin;
1	1	1	\N	37.760111	-122.420990	65.0	17.507671	10.0	\N	2016-07-27 17:54:36.430569	2016-07-27 17:54:36.430569	\N
2	1	1	\N	37.760038	-122.420959	5.0	17.411835	4.0	\N	2016-07-27 17:54:47.131879	2016-07-27 17:54:47.131879	\N
3	1	1	\N	37.760038	-122.420959	5.0	17.411835	4.0	\N	2016-07-27 18:15:04.822572	2016-07-27 18:15:04.822572	\N
4	1	1	\N	37.760122	-122.421072	65.0	12.956182	10.0	\N	2016-07-27 18:15:23.201393	2016-07-27 18:15:23.201393	\N
5	1	1	\N	37.760136	-122.420988	65.0	16.706362	10.0	\N	2016-07-27 18:15:35.404127	2016-07-27 18:15:35.404127	\N
6	1	1	\N	37.760117	-122.420908	10.0	16.326294	4.0	\N	2016-07-27 18:17:10.976633	2016-07-27 18:17:10.976633	\N
7	2	1	\N	37.750363	-122.187219	5.0	4.554701	3.0	\N	2016-07-27 20:59:52.433636	2016-07-27 20:59:52.433636	\N
8	2	1	\N	37.750382	-122.187305	745.7	4.554701	16.3	\N	2016-07-27 20:59:59.417502	2016-07-27 20:59:59.417502	\N
9	3	1	\N	37.750374	-122.187212	5.0	4.221937	3.0	\N	2016-07-28 01:22:52.792716	2016-07-28 01:22:52.792716	\N
10	4	1	\N	37.753907	-122.179138	3795.0	5.371626	10.0	\N	2016-07-28 01:23:08.086556	2016-07-28 01:23:08.086556	\N
11	5	1	\N	37.750329	-122.187209	5.0	5.259993	3.0	\N	2016-07-28 01:23:16.193649	2016-07-28 01:23:16.193649	\N
12	6	1	\N	37.750322	-122.187214	10.0	5.340956	4.0	\N	2016-07-28 01:23:28.003326	2016-07-28 01:23:28.003326	\N
13	5	1	1	37.750242	-122.187220	5.0	8.481550	3.0	\N	2016-07-31 03:23:21.21261	2016-07-31 03:23:21.21261	\N
14	5	1	1	37.750250	-122.187200	5.0	6.685072	3.0	\N	2016-07-31 03:23:27.144199	2016-07-31 03:23:27.144199	\N
15	4	1	1	37.750250	-122.187200	5.0	6.685072	3.0	\N	2016-07-31 03:23:41.997466	2016-07-31 03:23:41.997466	\N
16	6	1	1	37.750253	-122.187206	5.0	9.168257	3.0	\N	2016-07-31 03:23:47.56916	2016-07-31 03:23:47.56916	\N
17	7	1	1	37.750260	-122.187206	5.0	16.613600	6.0	\N	2016-07-31 03:24:03.098291	2016-07-31 03:24:03.098291	\N
18	8	1	1	37.750220	-122.187139	5.0	6.961195	3.0	\N	2016-07-31 03:24:14.894568	2016-07-31 03:24:14.894568	\N
19	9	1	1	37.750236	-122.187176	5.0	6.730604	3.0	\N	2016-07-31 03:24:45.284533	2016-07-31 03:24:45.284533	\N
20	10	1	2	37.750431	-122.186790	359.4	5.179304	11.1	\N	2016-08-06 22:41:19.083961	2016-08-06 22:41:19.083961	\N
21	11	1	2	37.750645	-122.186389	382.1	5.179304	11.1	\N	2016-08-06 22:42:15.764391	2016-08-06 22:42:15.764391	\N
22	10	1	2	37.750272	-122.187200	5.0	5.844252	3.0	\N	2016-08-06 22:42:35.173747	2016-08-06 22:42:35.173747	\N
23	11	1	2	37.750260	-122.187116	5.0	15.049299	4.0	\N	2016-08-06 22:42:59.013581	2016-08-06 22:42:59.013581	\N
24	11	1	2	37.750379	-122.186959	174.4	7.240797	10.0	\N	2016-08-07 00:34:41.880314	2016-08-07 00:34:41.880314	\N
25	12	3	3	37.749945	-122.186701	65.0	8.191150	18.1	\N	2016-08-07 21:03:51.437154	2016-08-07 21:03:51.437154	\N
26	12	3	3	37.749911	-122.186570	65.0	8.106350	17.2	\N	2016-08-07 21:04:06.984715	2016-08-07 21:04:06.984715	\N
27	13	3	3	37.749974	-122.186594	65.0	8.079838	16.7	\N	2016-08-07 21:04:26.608229	2016-08-07 21:04:26.608229	\N
28	14	3	3	37.749881	-122.186654	65.0	7.682637	13.3	\N	2016-08-07 21:04:37.003851	2016-08-07 21:04:37.003851	\N
29	15	3	3	37.749881	-122.186654	65.0	7.682637	13.3	\N	2016-08-07 21:04:42.345825	2016-08-07 21:04:42.345825	\N
30	16	3	3	37.749889	-122.186548	65.0	6.984450	12.1	\N	2016-08-07 21:05:34.838328	2016-08-07 21:05:34.838328	\N
31	7	3	3	37.749900	-122.186655	65.0	7.367112	11.6	\N	2016-08-07 21:06:03.441901	2016-08-07 21:06:03.441901	\N
32	12	3	3	37.749902	-122.186659	65.0	7.261771	12.2	\N	2016-08-07 21:09:11.670933	2016-08-07 21:09:11.670933	\N
33	7	3	3	37.749944	-122.186700	65.0	6.488462	13.3	\N	2016-08-07 21:09:33.734186	2016-08-07 21:09:33.734186	\N
34	17	3	3	37.749916	-122.186675	65.0	6.932915	12.5	\N	2016-08-07 21:12:18.50268	2016-08-07 21:12:18.50268	\N
35	18	3	3	37.749915	-122.186679	65.0	7.193213	22.2	\N	2016-08-07 21:12:25.637979	2016-08-07 21:12:25.637979	\N
36	2	3	3	37.749920	-122.186538	65.0	7.056892	17.8	\N	2016-08-07 21:18:24.226384	2016-08-07 21:18:24.226384	\N
37	8	3	3	37.749951	-122.186635	65.0	6.809297	18.8	\N	2016-08-07 21:23:59.042712	2016-08-07 21:23:59.042712	\N
38	19	3	3	37.749923	-122.186507	65.0	5.590634	13.9	\N	2016-08-07 21:25:56.332962	2016-08-07 21:25:56.332962	\N
39	20	3	3	37.749946	-122.186689	65.0	6.652298	12.1	\N	2016-08-07 21:33:50.027369	2016-08-07 21:33:50.027369	\N
40	21	3	3	37.749969	-122.186594	65.0	6.733113	12.5	\N	2016-08-07 21:45:40.176329	2016-08-07 21:45:40.176329	\N
41	22	3	3	37.749912	-122.186587	65.0	7.512745	21.2	\N	2016-08-07 21:48:29.613946	2016-08-07 21:48:29.613946	\N
42	23	4	3	37.749948	-122.186701	234.3	6.025399	14.5	\N	2016-08-07 22:00:01.678025	2016-08-07 22:00:01.678025	\N
43	23	4	3	37.749948	-122.186701	234.3	6.025399	14.5	\N	2016-08-07 22:00:12.03852	2016-08-07 22:00:12.03852	\N
44	24	4	3	37.749933	-122.186717	65.0	6.010849	13.8	\N	2016-08-07 22:25:42.944378	2016-08-07 22:25:42.944378	\N
45	24	4	3	37.749933	-122.186717	65.0	6.010849	13.8	\N	2016-08-07 22:25:46.706299	2016-08-07 22:25:46.706299	\N
46	24	4	3	37.749933	-122.186717	65.0	6.010849	13.8	\N	2016-08-07 22:25:51.506782	2016-08-07 22:25:51.506782	\N
47	25	4	3	37.749891	-122.186706	65.0	6.000612	12.7	\N	2016-08-07 22:52:13.486545	2016-08-07 22:52:13.486545	\N
48	25	4	3	37.749972	-122.186729	65.0	5.312472	15.4	\N	2016-08-07 22:52:18.662692	2016-08-07 22:52:18.662692	\N
49	26	4	3	37.749911	-122.186557	65.0	5.662014	13.8	\N	2016-08-07 23:46:49.049326	2016-08-07 23:46:49.049326	\N
50	26	4	3	37.749913	-122.186703	65.0	6.056795	15.1	\N	2016-08-07 23:46:55.580517	2016-08-07 23:46:55.580517	\N
51	27	4	3	37.749905	-122.186685	65.0	6.130747	13.6	\N	2016-08-08 00:10:04.978817	2016-08-08 00:10:04.978817	\N
52	27	4	3	37.749947	-122.186742	65.0	5.671072	13.8	\N	2016-08-08 00:10:14.057397	2016-08-08 00:10:14.057397	\N
53	28	4	3	37.749897	-122.186687	65.0	5.850615	13.3	\N	2016-08-08 00:37:32.632291	2016-08-08 00:37:32.632291	\N
54	28	4	3	37.749918	-122.186703	65.0	5.722590	17.2	\N	2016-08-08 00:37:38.861099	2016-08-08 00:37:38.861099	\N
55	29	4	3	37.749848	-122.186660	65.0	6.031411	15.4	\N	2016-08-08 00:51:02.704176	2016-08-08 00:51:02.704176	\N
56	29	4	3	37.749900	-122.186612	65.0	5.952863	17.8	\N	2016-08-08 00:51:09.919591	2016-08-08 00:51:09.919591	\N
57	30	4	3	37.749935	-122.186615	65.0	6.176991	15.2	\N	2016-08-08 01:18:25.324158	2016-08-08 01:18:25.324158	\N
58	30	4	3	37.749881	-122.186681	65.0	5.465353	11.3	\N	2016-08-08 01:18:29.03101	2016-08-08 01:18:29.03101	\N
59	31	4	3	37.749916	-122.186518	65.0	6.013723	10.4	\N	2016-08-08 01:22:32.756074	2016-08-08 01:22:32.756074	\N
60	31	4	3	37.749858	-122.186750	34.8	4.841747	14.7	\N	2016-08-08 01:22:39.000388	2016-08-08 01:22:39.000388	\N
61	32	1	3	37.753139	-122.181188	3923.0	5.562788	32.9	\N	2016-08-08 01:33:54.609112	2016-08-08 01:33:54.609112	\N
62	3	1	3	37.753139	-122.181188	3923.0	5.562788	32.9	\N	2016-08-08 01:47:37.123152	2016-08-08 01:47:37.123152	\N
63	33	1	3	37.753139	-122.181188	3923.0	5.562788	32.9	\N	2016-08-08 01:48:26.76191	2016-08-08 01:48:26.76191	\N
64	34	5	3	37.749977	-122.186638	65.0	7.760416	17.4	\N	2016-08-08 02:07:55.305323	2016-08-08 02:07:55.305323	\N
65	34	5	3	37.749977	-122.186638	65.0	7.760416	17.4	\N	2016-08-08 02:08:03.778935	2016-08-08 02:08:03.778935	\N
66	35	5	1	37.749447	-122.188267	245.0	2.041148	10.0	\N	2016-08-10 21:49:36.398668	2016-08-10 21:49:36.398668	\N
67	36	6	1	37.750284	-122.186797	65.0	11.625912	23.3	\N	2016-08-10 21:56:04.160366	2016-08-10 21:56:04.160366	\N
68	37	5	1	37.749422	-122.188313	245.0	2.013083	10.0	\N	2016-08-10 22:23:46.566217	2016-08-10 22:23:46.566217	\N
69	38	5	1	37.750025	-122.186980	244.8	2.865690	10.0	\N	2016-08-10 22:29:00.272129	2016-08-10 22:29:00.272129	\N
70	39	6	1	37.750284	-122.186797	65.0	11.625912	23.3	\N	2016-08-10 22:30:07.810571	2016-08-10 22:30:07.810571	\N
71	42	5	1	37.749556	-122.187113	165.0	5.216991	26.8	\N	2016-08-10 22:38:56.984749	2016-08-10 22:38:56.984749	\N
72	43	6	1	37.750059	-122.186925	65.0	3.984932	15.7	\N	2016-08-10 22:46:02.346822	2016-08-10 22:46:02.346822	\N
73	44	5	1	37.750260	-122.186878	65.0	5.121197	11.6	\N	2016-08-10 22:53:25.495663	2016-08-10 22:53:25.495663	\N
74	45	6	1	37.750170	-122.187188	5.0	8.455242	8.0	\N	2016-08-10 23:03:01.88885	2016-08-10 23:03:01.88885	\N
75	46	6	1	37.750158	-122.187210	5.0	0.277905	6.0	\N	2016-08-10 23:05:44.540755	2016-08-10 23:05:44.540755	\N
76	47	6	1	37.750188	-122.187215	80.9	3.139039	10.0	\N	2016-08-10 23:20:21.860096	2016-08-10 23:20:21.860096	\N
77	48	5	1	37.750425	-122.186630	142.6	4.603695	10.0	\N	2016-08-10 23:26:11.935506	2016-08-10 23:26:11.935506	\N
78	49	6	1	37.750144	-122.187071	65.0	3.675857	21.0	\N	2016-08-10 23:27:55.705076	2016-08-10 23:27:55.705076	\N
79	50	5	1	37.750490	-122.186631	120.2	4.305264	10.9	\N	2016-08-10 23:30:00.836998	2016-08-10 23:30:00.836998	\N
80	51	5	1	37.750038	-122.186938	65.0	5.435750	10.0	\N	2016-08-10 23:43:10.550523	2016-08-10 23:43:10.550523	\N
81	52	5	1	37.749721	-122.187255	96.5	5.253296	11.5	\N	2016-08-10 23:46:39.425392	2016-08-10 23:46:39.425392	\N
82	53	8	\N	37.750142	-122.187143	5.0	-6.668732	6.0	\N	2016-08-10 23:59:03.328414	2016-08-10 23:59:03.328414	\N
83	54	5	1	37.753005	-122.178963	1427.0	4.988516	34.1	\N	2016-08-11 00:01:15.394851	2016-08-11 00:01:15.394851	\N
84	55	5	1	37.749558	-122.187106	165.0	5.714439	43.8	\N	2016-08-11 00:03:28.218114	2016-08-11 00:03:28.218114	\N
85	56	5	1	37.750037	-122.186939	65.0	5.178319	10.0	\N	2016-08-11 00:10:23.892139	2016-08-11 00:10:23.892139	\N
86	57	5	1	37.749944	-122.187123	103.3	4.765023	13.4	\N	2016-08-11 00:19:30.022273	2016-08-11 00:19:30.022273	\N
87	53	5	1	37.750194	-122.186833	65.0	4.853549	10.0	\N	2016-08-11 00:19:42.321689	2016-08-11 00:19:42.321689	\N
88	58	5	1	37.750353	-122.187273	5.0	4.683088	3.0	\N	2016-08-11 00:31:33.56622	2016-08-11 00:31:33.56622	\N
89	59	6	\N	37.750288	-122.186892	70.0	3.926612	10.0	\N	2016-08-11 00:34:04.590198	2016-08-11 00:34:04.590198	\N
90	60	5	1	37.749592	-122.187085	165.0	5.759204	12.7	\N	2016-08-11 00:36:23.217323	2016-08-11 00:36:23.217323	\N
91	61	5	1	37.750425	-122.186909	141.8	4.080240	10.0	\N	2016-08-11 00:37:55.320957	2016-08-11 00:37:55.320957	\N
92	62	5	1	37.750144	-122.186961	65.0	5.512753	10.3	\N	2016-08-11 00:51:01.209631	2016-08-11 00:51:01.209631	\N
93	4	5	1	37.750299	-122.186806	65.0	5.692171	10.0	\N	2016-08-11 00:54:13.091843	2016-08-11 00:54:13.091843	\N
94	63	5	1	37.750044	-122.186937	65.0	5.837506	10.0	\N	2016-08-11 00:54:47.720082	2016-08-11 00:54:47.720082	\N
95	64	5	1	37.750069	-122.187865	262.7	3.836751	10.0	\N	2016-08-11 00:57:18.171431	2016-08-11 00:57:18.171431	\N
96	1	1	2	37.760123	-122.420942	65.0	14.075747	10.0	\N	2016-08-12 06:16:54.769088	2016-08-12 06:16:54.769088	\N
97	1	1	2	37.760090	-122.420976	65.0	13.895680	10.0	\N	2016-08-12 06:28:35.110882	2016-08-12 06:28:35.110882	\N
98	1	9	2	37.760138	-122.420868	65.0	13.439995	10.0	\N	2016-08-12 08:57:11.524206	2016-08-12 08:57:11.524206	\N
99	31	1	3	37.750303	-122.187226	5.0	5.467970	4.0	\N	2016-08-12 19:03:09.130029	2016-08-12 19:03:09.130029	\N
100	106	10	\N	37.753651	-122.193714	5000.0	34.364578	39.9	\N	2016-08-13 19:29:22.136742	2016-08-13 19:29:22.136742	\N
101	106	10	4	37.750063	-122.187322	50.0	5.421370	4.0	\N	2016-08-13 19:29:51.948785	2016-08-13 19:29:51.948785	\N
102	154	10	4	37.749941	-122.187400	213.6	7.242170	11.2	\N	2016-08-13 19:38:47.855461	2016-08-13 19:38:47.855461	\N
103	155	10	4	37.755096	-122.183098	3128.5	10.931105	30.9	\N	2016-08-13 19:40:23.168263	2016-08-13 19:40:23.168263	\N
104	105	10	4	37.754865	-122.183268	1995.2	20.095778	257.0	\N	2016-08-13 19:41:00.861808	2016-08-13 19:41:00.861808	155
105	156	10	4	37.749761	-122.187224	10.0	19.204664	12.0	\N	2016-08-13 19:43:23.043369	2016-08-13 19:43:23.043369	155
106	157	10	4	37.749746	-122.187203	30.0	18.115034	32.0	\N	2016-08-13 19:44:16.721965	2016-08-13 19:44:16.721965	155
107	106	10	4	37.750257	-122.186808	1001.3	18.115034	69.7	\N	2016-08-13 19:45:09.078117	2016-08-13 19:45:09.078117	155
108	158	10	4	37.749758	-122.187236	348.2	5.478254	12.9	\N	2016-08-13 19:48:34.128831	2016-08-13 19:48:34.128831	155
109	159	10	4	37.757113	-122.181716	1316.1	5.487349	10.0	\N	2016-08-13 19:49:43.39994	2016-08-13 19:49:43.39994	155
110	160	10	4	37.757961	-122.180917	1530.2	5.487349	10.0	\N	2016-08-13 19:50:11.255507	2016-08-13 19:50:11.255507	155
111	161	10	4	37.749213	-122.188803	215.2	5.595748	10.4	\N	2016-08-13 19:52:21.170498	2016-08-13 19:52:21.170498	155
112	119	10	4	37.754591	-122.183392	2908.3	49.809280	130.9	\N	2016-08-13 19:53:24.005313	2016-08-13 19:53:24.005313	155
113	126	10	4	37.751495	-122.185611	1086.6	34.315933	51.1	\N	2016-08-13 19:53:41.935522	2016-08-13 19:53:41.935522	155
114	132	10	4	37.749829	-122.187302	10.0	6.948286	4.0	\N	2016-08-13 19:53:57.923132	2016-08-13 19:53:57.923132	155
115	162	10	4	37.749820	-122.187126	133.0	8.534620	10.0	\N	2016-08-13 19:55:20.833799	2016-08-13 19:55:20.833799	155
116	163	10	4	37.750289	-122.186631	733.7	6.869429	22.3	\N	2016-08-13 19:55:47.438397	2016-08-13 19:55:47.438397	155
117	164	10	4	37.749615	-122.187153	5.0	6.806379	4.0	\N	2016-08-13 19:56:14.857509	2016-08-13 19:56:14.857509	155
118	120	10	4	37.749776	-122.187168	242.1	6.399885	11.9	\N	2016-08-13 19:56:46.660342	2016-08-13 19:56:46.660342	155
119	165	10	4	37.750037	-122.187005	339.9	6.819929	12.9	\N	2016-08-13 20:01:49.469905	2016-08-13 20:01:49.469905	155
120	166	10	4	37.754766	-122.183320	1962.6	6.418470	24.1	\N	2016-08-13 20:03:28.210666	2016-08-13 20:03:28.210666	155
121	167	10	4	37.753101	-122.184607	2119.8	8.881330	24.8	\N	2016-08-13 20:11:26.495408	2016-08-13 20:11:26.495408	155
122	95	10	4	37.757984	-122.180824	4000.0	6.465315	18.1	\N	2016-08-13 20:15:33.074555	2016-08-13 20:15:33.074555	155
123	97	10	4	37.756768	-122.201871	3000.0	10.312819	39.3	\N	2016-08-13 20:19:36.055755	2016-08-13 20:19:36.055755	155
124	73	10	4	37.753410	-122.193286	5000.0	5.226271	38.9	\N	2016-08-13 20:40:53.711573	2016-08-13 20:40:53.711573	155
125	72	10	4	37.742996	-122.195599	2000.0	7.656141	27.0	\N	2016-08-13 20:41:00.817877	2016-08-13 20:41:00.817877	155
126	71	10	4	37.749709	-122.187125	5.0	6.078657	3.0	\N	2016-08-13 20:41:11.915775	2016-08-13 20:41:11.915775	155
127	76	10	4	37.749718	-122.187129	5.0	7.675001	3.0	\N	2016-08-13 20:41:24.738505	2016-08-13 20:41:24.738505	155
128	75	10	4	37.749725	-122.187121	5.0	6.699965	3.0	\N	2016-08-13 20:41:35.967233	2016-08-13 20:41:35.967233	155
129	74	10	4	37.749722	-122.187133	5.0	6.245985	4.0	\N	2016-08-13 20:41:43.389822	2016-08-13 20:41:43.389822	155
130	70	10	4	37.749725	-122.187129	5.0	6.714094	4.0	\N	2016-08-13 20:41:49.218897	2016-08-13 20:41:49.218897	155
131	69	10	4	37.749729	-122.187121	5.0	7.078444	4.0	\N	2016-08-13 20:41:59.839796	2016-08-13 20:41:59.839796	155
132	77	10	4	37.749729	-122.187121	5.0	7.811445	3.0	\N	2016-08-13 20:42:19.686164	2016-08-13 20:42:19.686164	155
133	100	10	4	37.749765	-122.187097	5.0	8.174452	4.0	\N	2016-08-13 20:42:30.423215	2016-08-13 20:42:30.423215	155
134	168	10	4	37.749786	-122.186904	30.0	5.811323	3.0	\N	2016-08-13 20:45:57.048277	2016-08-13 20:45:57.048277	155
135	169	10	4	37.751570	-122.190071	2887.9	5.849897	35.8	\N	2016-08-13 20:47:11.222237	2016-08-13 20:47:11.222237	155
136	170	10	4	37.750740	-122.188826	1333.0	5.767836	20.7	\N	2016-08-13 20:48:08.770903	2016-08-13 20:48:08.770903	155
137	171	10	4	37.750073	-122.187010	279.4	6.940840	16.1	\N	2016-08-13 20:50:26.869026	2016-08-13 20:50:26.869026	155
138	172	10	4	37.742849	-122.195928	2000.0	8.798384	29.1	\N	2016-08-13 20:53:28.495503	2016-08-13 20:53:28.495503	155
139	102	10	4	37.751166	-122.189545	2433.8	5.749342	33.1	\N	2016-08-13 20:54:02.643354	2016-08-13 20:54:02.643354	155
140	173	10	4	37.749713	-122.187137	30.0	5.357710	4.0	\N	2016-08-13 21:03:58.42963	2016-08-13 21:03:58.42963	155
141	174	10	4	37.753681	-122.193753	5000.0	5.414534	61.1	\N	2016-08-13 21:04:52.942056	2016-08-13 21:04:52.942056	155
142	175	10	4	37.749935	-122.187126	5.0	7.881269	4.0	\N	2016-08-13 21:28:14.773642	2016-08-13 21:28:14.773642	155
143	176	10	4	37.749191	-122.195464	3967.9	10.168013	48.4	\N	2016-08-13 21:29:45.565019	2016-08-13 21:29:45.565019	155
144	177	10	4	37.749862	-122.186990	30.0	5.797743	4.0	\N	2016-08-13 21:31:04.551357	2016-08-13 21:31:04.551357	155
145	178	10	4	37.752398	-122.185417	2002.9	8.369001	11.5	\N	2016-08-13 21:31:48.421787	2016-08-13 21:31:48.421787	155
146	179	10	4	37.750478	-122.186682	584.2	5.583693	16.0	\N	2016-08-13 21:33:02.424012	2016-08-13 21:33:02.424012	155
147	180	10	4	37.751472	-122.185865	1363.3	5.319258	20.9	\N	2016-08-13 21:34:03.736621	2016-08-13 21:34:03.736621	155
148	181	10	4	37.750976	-122.186230	1121.9	5.201033	19.6	\N	2016-08-13 21:35:44.697828	2016-08-13 21:35:44.697828	155
149	122	10	4	37.753115	-122.184562	2115.7	5.338636	20.3	\N	2016-08-13 21:37:32.053998	2016-08-13 21:37:32.053998	155
150	125	10	4	37.751063	-122.189397	2314.5	5.491865	25.7	\N	2016-08-13 21:38:07.458048	2016-08-13 21:38:07.458048	155
151	121	10	4	37.749719	-122.187164	5.0	5.395765	4.0	\N	2016-08-13 21:38:36.14218	2016-08-13 21:38:36.14218	155
152	182	10	4	37.749675	-122.187124	235.3	5.407026	12.6	\N	2016-08-13 21:39:06.292751	2016-08-13 21:39:06.292751	155
153	128	10	4	37.749640	-122.187305	361.4	6.157545	13.1	\N	2016-08-13 21:40:05.205765	2016-08-13 21:40:05.205765	155
154	183	10	4	37.750002	-122.187668	956.9	6.556868	17.7	\N	2016-08-13 21:42:32.7208	2016-08-13 21:42:32.7208	155
155	184	10	4	37.751313	-122.189795	2608.2	5.597700	27.0	\N	2016-08-13 21:43:27.930625	2016-08-13 21:43:27.930625	155
156	185	11	3	37.750186	-122.187047	76.4	7.792649	14.0	\N	2016-08-13 21:55:22.830644	2016-08-13 21:55:22.830644	\N
157	186	11	3	37.750166	-122.186995	5.0	5.717299	4.0	\N	2016-08-13 21:55:57.883371	2016-08-13 21:55:57.883371	\N
158	187	11	3	37.750279	-122.187061	72.3	4.990294	10.4	\N	2016-08-13 21:56:06.696981	2016-08-13 21:56:06.696981	\N
159	188	11	3	37.750236	-122.187136	5.0	3.547010	4.0	\N	2016-08-13 21:56:18.672005	2016-08-13 21:56:18.672005	\N
160	189	10	4	37.750008	-122.187620	954.2	5.666914	18.6	\N	2016-08-13 21:56:19.456813	2016-08-13 21:56:19.456813	155
161	190	11	3	37.750233	-122.187128	5.0	2.491285	3.0	\N	2016-08-13 21:56:28.891629	2016-08-13 21:56:28.891629	\N
162	191	11	3	37.750237	-122.187116	5.0	2.634993	3.0	\N	2016-08-13 21:56:34.840688	2016-08-13 21:56:34.840688	\N
163	192	11	3	37.750245	-122.187114	5.0	2.935713	3.0	\N	2016-08-13 21:56:45.104315	2016-08-13 21:56:45.104315	\N
164	193	11	3	37.750229	-122.187116	5.0	-1.039629	4.0	\N	2016-08-13 21:56:55.363763	2016-08-13 21:56:55.363763	\N
165	187	11	3	37.750221	-122.187102	5.0	3.194685	3.0	\N	2016-08-13 21:57:07.323443	2016-08-13 21:57:07.323443	\N
166	194	11	3	37.750191	-122.186910	65.0	4.567239	10.0	\N	2016-08-13 22:00:11.909877	2016-08-13 22:00:11.909877	\N
167	188	11	3	37.750182	-122.186851	82.7	5.384095	10.0	\N	2016-08-13 22:00:35.77381	2016-08-13 22:00:35.77381	\N
168	195	11	3	37.750279	-122.186857	65.0	5.150424	10.0	\N	2016-08-13 22:00:48.295423	2016-08-13 22:00:48.295423	\N
169	196	11	3	37.750222	-122.187017	5.0	5.269300	4.0	\N	2016-08-13 22:00:57.247415	2016-08-13 22:00:57.247415	\N
170	194	11	3	37.750218	-122.187047	5.0	5.203901	4.0	\N	2016-08-13 22:02:50.855763	2016-08-13 22:02:50.855763	\N
171	190	11	3	37.750019	-122.186939	114.9	5.164162	10.3	\N	2016-08-13 22:03:05.506253	2016-08-13 22:03:05.506253	\N
172	197	11	3	37.750298	-122.186815	65.0	5.431833	10.0	\N	2016-08-13 22:03:20.948853	2016-08-13 22:03:20.948853	\N
173	198	11	3	37.750199	-122.187087	5.0	4.712172	4.0	\N	2016-08-13 22:04:07.546131	2016-08-13 22:04:07.546131	\N
174	199	11	3	37.750306	-122.186816	73.2	4.809192	10.0	\N	2016-08-13 22:10:25.538444	2016-08-13 22:10:25.538444	\N
175	194	11	3	37.750251	-122.187060	5.0	2.951246	4.0	\N	2016-08-13 22:10:38.233772	2016-08-13 22:10:38.233772	\N
176	199	11	3	37.750239	-122.187120	5.0	1.375776	4.0	\N	2016-08-13 22:14:42.965931	2016-08-13 22:14:42.965931	\N
177	194	11	3	37.750410	-122.187023	109.5	3.558675	10.5	\N	2016-08-13 22:14:49.867542	2016-08-13 22:14:49.867542	\N
178	188	11	3	37.750281	-122.187238	5.0	4.280958	4.0	\N	2016-08-13 22:14:56.787766	2016-08-13 22:14:56.787766	\N
179	200	11	3	37.750348	-122.187269	5.0	4.537672	4.0	\N	2016-08-13 22:16:06.219863	2016-08-13 22:16:06.219863	\N
180	65	10	4	37.753671	-122.193632	5000.0	2.453962	53.4	\N	2016-08-13 22:18:51.324037	2016-08-13 22:18:51.324037	155
181	101	10	4	37.753671	-122.193632	5000.0	2.453962	53.4	\N	2016-08-13 22:19:14.579969	2016-08-13 22:19:14.579969	155
182	201	11	3	37.750095	-122.186838	65.0	3.470648	13.1	\N	2016-08-13 22:22:20.125619	2016-08-13 22:22:20.125619	\N
183	202	11	3	37.750167	-122.186931	77.6	6.324628	13.0	\N	2016-08-13 22:23:57.337597	2016-08-13 22:23:57.337597	\N
184	186	11	3	37.750237	-122.187066	5.0	4.685072	3.0	\N	2016-08-13 22:24:59.079984	2016-08-13 22:24:59.079984	\N
185	185	11	3	37.750341	-122.187242	5.0	2.493971	4.0	\N	2016-08-13 22:25:09.668755	2016-08-13 22:25:09.668755	\N
186	190	11	3	37.750359	-122.187209	5.0	1.606459	4.0	\N	2016-08-13 22:26:08.611821	2016-08-13 22:26:08.611821	\N
187	203	10	4	37.749697	-122.186853	30.0	-21.647509	48.0	\N	2016-08-13 22:26:19.720945	2016-08-13 22:26:19.720945	155
188	191	11	3	37.750360	-122.187189	65.0	3.866309	11.0	\N	2016-08-13 22:26:26.510383	2016-08-13 22:26:26.510383	\N
189	204	10	4	37.753388	-122.194275	4250.6	5.363539	34.8	\N	2016-08-13 22:26:33.294144	2016-08-13 22:26:33.294144	155
190	187	11	3	37.750356	-122.187222	5.0	4.491316	3.0	\N	2016-08-13 22:27:06.53111	2016-08-13 22:27:06.53111	\N
191	192	11	3	37.750336	-122.187199	30.0	7.760695	32.0	\N	2016-08-13 22:27:18.891033	2016-08-13 22:27:18.891033	\N
192	193	11	3	37.750331	-122.187226	5.0	4.724623	4.0	\N	2016-08-13 22:28:17.796906	2016-08-13 22:28:17.796906	\N
193	196	11	3	37.750338	-122.187251	5.0	4.587324	4.0	\N	2016-08-13 22:29:01.431501	2016-08-13 22:29:01.431501	\N
194	195	11	3	37.750050	-122.187065	71.1	3.521012	10.0	\N	2016-08-13 22:29:33.665999	2016-08-13 22:29:33.665999	\N
195	197	11	3	37.750335	-122.187211	5.0	4.677229	4.0	\N	2016-08-13 22:29:39.42673	2016-08-13 22:29:39.42673	\N
196	205	11	3	37.750333	-122.187213	5.0	3.335218	4.0	\N	2016-08-13 22:31:25.861189	2016-08-13 22:31:25.861189	\N
197	206	11	3	37.750300	-122.187135	5.0	5.538282	4.0	\N	2016-08-13 22:32:19.172729	2016-08-13 22:32:19.172729	\N
198	198	11	3	37.750381	-122.187190	5.0	5.490339	4.0	\N	2016-08-13 22:34:58.939184	2016-08-13 22:34:58.939184	\N
199	207	11	3	37.750209	-122.186876	93.6	6.258193	14.0	\N	2016-08-13 22:35:36.813089	2016-08-13 22:35:36.813089	\N
200	208	11	3	37.750383	-122.187207	5.0	4.621290	4.0	\N	2016-08-13 22:35:42.653863	2016-08-13 22:35:42.653863	\N
201	209	10	4	37.749836	-122.187341	10.0	6.549177	4.0	\N	2016-08-13 23:53:34.388756	2016-08-13 23:53:34.388756	155
202	210	10	4	37.758174	-122.180685	4000.0	11.934645	13.2	\N	2016-08-13 23:54:33.333239	2016-08-13 23:54:33.333239	155
203	211	10	4	37.749870	-122.187111	10.0	7.772291	4.0	\N	2016-08-13 23:54:56.134538	2016-08-13 23:54:56.134538	155
204	212	10	4	37.749824	-122.187105	10.0	6.159346	4.0	\N	2016-08-13 23:55:11.613628	2016-08-13 23:55:11.613628	155
205	213	10	4	37.749826	-122.187083	10.0	5.681776	4.0	\N	2016-08-13 23:55:45.969504	2016-08-13 23:55:45.969504	155
206	214	10	4	37.749888	-122.187015	355.2	5.626204	10.0	\N	2016-08-13 23:56:21.399134	2016-08-13 23:56:21.399134	155
207	215	10	4	37.749867	-122.187031	279.8	5.410536	12.7	\N	2016-08-13 23:56:47.513607	2016-08-13 23:56:47.513607	155
208	216	10	4	37.749775	-122.187077	5.0	5.574598	4.0	\N	2016-08-13 23:57:09.158951	2016-08-13 23:57:09.158951	155
209	217	10	4	37.749721	-122.187244	5.0	24.498243	8.0	\N	2016-08-13 23:58:07.256558	2016-08-13 23:58:07.256558	155
210	218	10	4	37.750860	-122.186331	619.5	7.327223	13.7	\N	2016-08-13 23:58:28.479025	2016-08-13 23:58:28.479025	155
211	207	1	1	37.750312	-122.187199	5.0	6.245955	6.0	\N	2016-08-14 00:20:19.481266	2016-08-14 00:20:19.481266	\N
212	219	5	\N	37.749477	-122.187324	65.0	7.268106	15.1	\N	2016-08-14 00:37:26.241666	2016-08-14 00:37:26.241666	\N
213	220	5	3	37.749857	-122.187122	65.0	6.636833	10.2	\N	2016-08-14 00:39:24.403642	2016-08-14 00:39:24.403642	\N
214	221	5	3	37.750263	-122.186675	65.0	10.424682	15.0	\N	2016-08-14 00:40:23.02046	2016-08-14 00:40:23.02046	\N
215	222	5	3	37.750186	-122.186739	65.0	9.502534	14.1	\N	2016-08-14 00:41:05.251671	2016-08-14 00:41:05.251671	\N
216	223	5	3	37.750238	-122.186869	101.2	7.989264	10.8	\N	2016-08-14 00:42:06.125488	2016-08-14 00:42:06.125488	\N
217	224	5	3	37.750118	-122.186862	165.0	8.211493	21.2	\N	2016-08-14 00:42:22.837213	2016-08-14 00:42:22.837213	\N
218	225	5	3	37.750129	-122.186781	65.0	8.830527	14.9	\N	2016-08-14 00:42:29.702231	2016-08-14 00:42:29.702231	\N
219	226	5	3	37.750044	-122.186910	65.0	8.846801	12.9	\N	2016-08-14 00:42:37.658829	2016-08-14 00:42:37.658829	\N
220	227	5	3	37.750250	-122.187087	5.0	6.473372	4.0	\N	2016-08-14 00:43:38.471531	2016-08-14 00:43:38.471531	\N
221	228	5	3	37.750254	-122.187111	30.0	10.118208	32.0	\N	2016-08-14 00:44:22.010361	2016-08-14 00:44:22.010361	\N
222	229	5	3	37.749867	-122.187025	66.7	6.638188	12.9	\N	2016-08-14 00:44:44.882211	2016-08-14 00:44:44.882211	\N
223	230	5	3	37.750287	-122.186774	65.0	6.154825	10.3	\N	2016-08-14 00:45:25.061212	2016-08-14 00:45:25.061212	\N
224	231	5	3	37.750284	-122.186736	65.0	4.442172	12.3	\N	2016-08-14 00:45:48.979269	2016-08-14 00:45:48.979269	\N
225	232	5	3	37.750189	-122.186823	65.0	6.180725	10.1	\N	2016-08-14 00:46:02.751467	2016-08-14 00:46:02.751467	\N
226	233	5	3	37.750243	-122.187112	5.0	5.566328	4.0	\N	2016-08-14 00:46:23.64618	2016-08-14 00:46:23.64618	\N
227	234	5	3	37.750242	-122.187102	5.0	6.016615	3.0	\N	2016-08-14 00:46:43.152467	2016-08-14 00:46:43.152467	\N
228	235	5	3	37.750246	-122.187117	5.0	6.270735	3.0	\N	2016-08-14 00:46:55.73217	2016-08-14 00:46:55.73217	\N
229	236	5	3	37.750061	-122.186917	65.0	6.105416	10.0	\N	2016-08-14 00:47:23.782175	2016-08-14 00:47:23.782175	\N
230	237	5	3	37.750271	-122.187095	5.0	4.068496	3.0	\N	2016-08-14 00:47:43.384867	2016-08-14 00:47:43.384867	\N
231	6	5	3	37.750149	-122.186998	10.0	4.564680	4.0	\N	2016-08-14 00:48:11.616669	2016-08-14 00:48:11.616669	\N
232	5	5	3	37.750240	-122.187134	5.0	3.795729	4.0	\N	2016-08-14 00:48:28.319722	2016-08-14 00:48:28.319722	\N
233	238	5	3	37.750207	-122.187132	5.0	6.481794	3.0	\N	2016-08-14 00:48:56.185518	2016-08-14 00:48:56.185518	\N
234	239	5	3	37.750281	-122.187113	5.0	5.484343	3.0	\N	2016-08-14 00:49:08.208745	2016-08-14 00:49:08.208745	\N
235	99	2	5	37.757824	-122.392888	30.0	17.269897	4.0	\N	2016-08-14 08:06:18.395931	2016-08-14 08:06:18.395931	\N
236	240	2	5	37.757708	-122.392912	10.0	19.270325	4.0	\N	2016-08-14 08:08:26.036874	2016-08-14 08:08:26.036874	\N
237	241	2	5	37.757837	-122.392897	5.0	17.070099	4.0	\N	2016-08-14 08:10:14.443025	2016-08-14 08:10:14.443025	\N
238	242	2	5	37.757819	-122.392786	5.0	15.398499	4.0	\N	2016-08-14 08:11:30.098745	2016-08-14 08:11:30.098745	\N
239	243	2	5	37.757757	-122.392882	5.0	17.312134	4.0	\N	2016-08-14 08:13:16.18317	2016-08-14 08:13:16.18317	\N
240	244	2	5	37.757561	-122.392698	65.0	16.498722	10.5	\N	2016-08-14 08:15:02.349174	2016-08-14 08:15:02.349174	\N
241	245	2	5	37.757611	-122.392828	65.0	13.713687	10.0	\N	2016-08-14 08:16:17.218141	2016-08-14 08:16:17.218141	\N
242	253	13	4	37.764577	-122.174928	3000.0	5.760725	19.3	\N	2016-08-14 20:36:52.08113	2016-08-14 20:36:52.08113	252
243	254	13	4	37.749135	-122.187297	50.0	4.992140	4.0	\N	2016-08-14 20:38:38.623368	2016-08-14 20:38:38.623368	252
244	255	13	4	37.749927	-122.188185	30.0	6.710615	4.0	\N	2016-08-14 20:39:45.154496	2016-08-14 20:39:45.154496	252
245	256	13	4	37.749625	-122.187620	65.0	5.166609	10.0	\N	2016-08-14 20:40:36.229832	2016-08-14 20:40:36.229832	252
246	257	13	4	37.749422	-122.188145	100.0	5.490950	4.0	\N	2016-08-14 20:42:04.950154	2016-08-14 20:42:04.950154	252
247	256	13	4	37.749745	-122.187352	130.7	6.659864	12.8	\N	2016-08-14 20:42:35.26123	2016-08-14 20:42:35.26123	252
248	253	13	4	37.749798	-122.187312	171.7	8.244368	11.1	\N	2016-08-14 20:42:44.217734	2016-08-14 20:42:44.217734	252
249	256	13	4	37.749752	-122.187352	10.0	6.570631	4.0	\N	2016-08-14 20:43:18.355465	2016-08-14 20:43:18.355465	252
250	252	13	4	37.749714	-122.187872	245.1	7.204115	10.0	\N	2016-08-14 20:43:54.994044	2016-08-14 20:43:54.994044	\N
251	253	13	4	37.749714	-122.187872	245.1	7.204115	10.0	250	2016-08-14 20:43:55.01195	2016-08-14 20:43:55.01195	\N
252	257	13	4	37.749714	-122.187872	245.1	7.204115	10.0	250	2016-08-14 20:43:55.01835	2016-08-14 20:43:55.01835	\N
253	256	13	4	37.749714	-122.187872	245.1	7.204115	10.0	250	2016-08-14 20:43:55.023656	2016-08-14 20:43:55.023656	\N
254	255	13	4	37.749714	-122.187872	245.1	7.204115	10.0	250	2016-08-14 20:43:55.027182	2016-08-14 20:43:55.027182	\N
255	254	13	4	37.749714	-122.187872	245.1	7.204115	10.0	250	2016-08-14 20:43:55.031314	2016-08-14 20:43:55.031314	\N
256	258	13	4	37.749833	-122.187216	151.3	7.789228	11.9	\N	2016-08-14 20:46:51.533318	2016-08-14 20:46:51.533318	\N
257	259	13	4	37.749822	-122.187305	222.3	7.822096	10.7	\N	2016-08-14 20:47:08.078439	2016-08-14 20:47:08.078439	\N
258	260	13	4	37.749374	-122.187637	30.0	15.708784	3.0	\N	2016-08-14 20:48:49.72141	2016-08-14 20:48:49.72141	\N
259	261	13	4	37.749132	-122.187449	50.0	5.208754	4.0	\N	2016-08-14 20:50:33.671035	2016-08-14 20:50:33.671035	\N
260	94	13	4	37.749570	-122.187353	10.0	6.344618	4.0	\N	2016-08-14 20:54:17.892359	2016-08-14 20:54:17.892359	\N
261	262	1	2	37.750344	-122.187192	5.0	6.155592	3.0	\N	2016-08-14 21:55:08.061984	2016-08-14 21:55:08.061984	\N
262	263	1	2	37.750375	-122.187198	5.0	6.350111	3.0	\N	2016-08-14 21:56:21.297762	2016-08-14 21:56:21.297762	\N
263	264	1	2	37.749903	-122.187123	70.2	6.663717	10.5	\N	2016-08-14 21:58:47.426507	2016-08-14 21:58:47.426507	\N
264	262	1	2	37.750232	-122.187218	5.0	1.507032	4.0	\N	2016-08-14 21:59:56.511636	2016-08-14 21:59:56.511636	\N
265	265	1	2	37.750154	-122.186864	97.5	4.604785	11.7	\N	2016-08-15 01:44:24.089909	2016-08-15 01:44:24.089909	\N
266	266	1	2	37.750290	-122.187260	10.0	11.207991	8.0	\N	2016-08-15 01:45:10.499332	2016-08-15 01:45:10.499332	\N
267	78	13	4	37.749592	-122.187151	5.0	3.107100	4.0	\N	2016-08-15 01:54:59.26957	2016-08-15 01:54:59.26957	\N
268	81	13	4	37.749664	-122.187093	117.9	2.076307	12.8	\N	2016-08-15 01:55:20.820588	2016-08-15 01:55:20.820588	\N
269	267	13	4	37.749625	-122.187251	5.0	9.162184	3.0	\N	2016-08-15 01:56:21.46222	2016-08-15 01:56:21.46222	\N
270	85	13	4	37.749617	-122.187366	50.0	-0.290270	24.0	\N	2016-08-15 01:57:00.732229	2016-08-15 01:57:00.732229	\N
271	86	13	4	37.749564	-122.187198	10.0	3.615370	4.0	\N	2016-08-15 01:57:09.625065	2016-08-15 01:57:09.625065	\N
272	93	13	4	37.749583	-122.187178	5.0	-0.967577	3.0	\N	2016-08-15 01:57:32.315033	2016-08-15 01:57:32.315033	\N
273	230	13	4	37.749686	-122.187159	65.0	1.330641	10.0	\N	2016-08-15 01:58:27.009197	2016-08-15 01:58:27.009197	\N
274	226	13	4	37.749651	-122.186865	10.0	5.497480	4.0	\N	2016-08-15 01:58:50.325126	2016-08-15 01:58:50.325126	\N
275	224	13	4	37.749646	-122.187033	10.0	3.647749	4.0	\N	2016-08-15 01:58:58.575892	2016-08-15 01:58:58.575892	\N
276	223	13	4	37.749633	-122.186987	10.0	0.868666	4.0	\N	2016-08-15 01:59:08.683042	2016-08-15 01:59:08.683042	\N
277	225	13	4	37.749638	-122.187039	10.0	-4.926043	6.0	\N	2016-08-15 01:59:35.403932	2016-08-15 01:59:35.403932	\N
278	227	13	4	37.749676	-122.186996	5.0	2.822340	4.0	\N	2016-08-15 01:59:44.823639	2016-08-15 01:59:44.823639	\N
279	221	13	4	37.749676	-122.187132	5.0	2.638777	4.0	\N	2016-08-15 02:00:19.30748	2016-08-15 02:00:19.30748	\N
280	268	13	4	37.749665	-122.187156	200.0	2.597311	10.9	\N	2016-08-15 02:00:25.263324	2016-08-15 02:00:25.263324	\N
281	222	5	4	37.749720	-122.187230	65.0	4.537021	10.0	\N	2016-08-15 02:00:52.153599	2016-08-15 02:00:52.153599	\N
282	270	5	4	37.749646	-122.187236	5.0	5.004499	6.0	\N	2016-08-15 02:00:57.915396	2016-08-15 02:00:57.915396	\N
283	269	13	4	37.749651	-122.187164	10.0	4.240461	4.0	\N	2016-08-15 02:01:00.0592	2016-08-15 02:01:00.0592	\N
284	229	13	4	37.749726	-122.187028	10.0	5.486647	4.0	\N	2016-08-15 02:01:07.601555	2016-08-15 02:01:07.601555	\N
285	228	5	4	37.749646	-122.187236	5.0	4.953138	3.0	\N	2016-08-15 02:01:18.237409	2016-08-15 02:01:18.237409	\N
286	234	13	4	37.749671	-122.187068	5.0	4.335859	3.0	\N	2016-08-15 02:01:18.967061	2016-08-15 02:01:18.967061	\N
287	231	5	4	37.749626	-122.187166	65.0	5.246569	10.0	\N	2016-08-15 02:01:49.283548	2016-08-15 02:01:49.283548	\N
288	247	13	4	37.749652	-122.187105	5.0	3.654890	3.0	\N	2016-08-15 02:02:15.510064	2016-08-15 02:02:15.510064	\N
289	44	5	4	37.749775	-122.186930	30.0	5.692274	4.0	\N	2016-08-15 02:02:25.592959	2016-08-15 02:02:25.592959	\N
290	235	13	4	37.749692	-122.187101	10.0	3.807631	4.0	\N	2016-08-15 02:02:28.282974	2016-08-15 02:02:28.282974	\N
291	237	13	4	37.749624	-122.187185	5.0	10.198500	3.0	\N	2016-08-15 02:02:43.114225	2016-08-15 02:02:43.114225	\N
292	250	13	4	37.749595	-122.187183	5.0	14.137098	6.0	\N	2016-08-15 02:02:51.025192	2016-08-15 02:02:51.025192	\N
293	233	5	4	37.749725	-122.187231	65.0	4.135905	10.0	\N	2016-08-15 02:02:52.658566	2016-08-15 02:02:52.658566	\N
294	219	13	4	37.749598	-122.187157	5.0	10.175276	3.0	\N	2016-08-15 02:03:12.632911	2016-08-15 02:03:12.632911	\N
295	238	13	4	37.749570	-122.187146	5.0	8.146772	4.0	\N	2016-08-15 02:03:26.599813	2016-08-15 02:03:26.599813	\N
296	206	13	4	37.749575	-122.187114	5.0	11.494520	3.0	\N	2016-08-15 02:03:34.03318	2016-08-15 02:03:34.03318	\N
297	236	13	4	37.749589	-122.187080	5.0	7.059797	4.0	\N	2016-08-15 02:03:43.742401	2016-08-15 02:03:43.742401	\N
298	249	13	4	37.749603	-122.187069	5.0	8.926161	4.0	\N	2016-08-15 02:04:02.090762	2016-08-15 02:04:02.090762	\N
299	200	13	4	37.749729	-122.187001	166.7	8.749739	10.6	\N	2016-08-15 02:04:20.654683	2016-08-15 02:04:20.654683	\N
300	202	13	4	37.749644	-122.186887	5.0	17.425581	6.0	\N	2016-08-15 02:04:33.401483	2016-08-15 02:04:33.401483	\N
301	201	13	4	37.749675	-122.186926	5.0	10.910109	3.0	\N	2016-08-15 02:04:43.549892	2016-08-15 02:04:43.549892	\N
302	188	13	4	37.749624	-122.186934	5.0	11.198957	3.0	\N	2016-08-15 02:04:51.60846	2016-08-15 02:04:51.60846	\N
303	186	5	4	37.749551	-122.187223	65.0	4.769021	10.0	\N	2016-08-15 02:05:06.06465	2016-08-15 02:05:06.06465	\N
304	191	13	4	37.749577	-122.187133	10.0	8.162764	4.0	\N	2016-08-15 02:05:12.455251	2016-08-15 02:05:12.455251	\N
305	194	5	4	37.749517	-122.187103	65.0	5.313678	10.6	\N	2016-08-15 02:05:15.715876	2016-08-15 02:05:15.715876	\N
306	205	5	4	37.749632	-122.187169	5.0	-4.601488	6.0	\N	2016-08-15 02:05:35.769163	2016-08-15 02:05:35.769163	\N
307	195	13	4	37.749675	-122.187301	10.0	6.650465	4.0	\N	2016-08-15 02:05:40.75686	2016-08-15 02:05:40.75686	\N
308	187	5	4	37.749637	-122.187133	50.0	-0.530291	24.0	\N	2016-08-15 02:05:47.023152	2016-08-15 02:05:47.023152	\N
309	239	13	4	37.749607	-122.187219	30.0	6.753645	12.0	\N	2016-08-15 02:06:03.811813	2016-08-15 02:06:03.811813	\N
310	196	13	4	37.749575	-122.187239	10.0	5.544264	12.0	\N	2016-08-15 02:06:24.787156	2016-08-15 02:06:24.787156	\N
311	232	13	4	37.749587	-122.187233	65.0	6.621107	11.9	\N	2016-08-15 02:06:32.356436	2016-08-15 02:06:32.356436	\N
312	197	5	4	37.749637	-122.187133	5.0	-1.027361	3.0	\N	2016-08-15 02:06:51.885472	2016-08-15 02:06:51.885472	\N
313	207	13	4	37.749567	-122.187221	5.0	9.109205	4.0	\N	2016-08-15 02:06:53.003077	2016-08-15 02:06:53.003077	\N
314	198	13	4	37.749575	-122.187222	5.0	8.038923	3.0	\N	2016-08-15 02:07:11.176154	2016-08-15 02:07:11.176154	\N
315	208	13	4	37.749571	-122.187236	30.0	5.918165	4.0	\N	2016-08-15 02:07:18.704143	2016-08-15 02:07:18.704143	\N
316	220	5	4	37.749624	-122.187196	50.0	6.970839	24.0	\N	2016-08-15 02:07:21.210519	2016-08-15 02:07:21.210519	\N
317	271	13	4	37.749575	-122.187230	5.0	7.701460	4.0	\N	2016-08-15 02:07:29.270111	2016-08-15 02:07:29.270111	\N
318	185	5	4	37.749608	-122.187269	30.0	4.987471	4.0	\N	2016-08-15 02:07:38.721527	2016-08-15 02:07:38.721527	\N
319	59	13	4	37.749566	-122.187195	5.0	7.365889	4.0	\N	2016-08-15 02:07:48.5066	2016-08-15 02:07:48.5066	\N
320	190	13	4	37.749550	-122.187245	5.0	7.961866	4.0	\N	2016-08-15 02:07:56.378183	2016-08-15 02:07:56.378183	\N
321	6	5	4	37.749628	-122.187182	10.0	-0.741411	12.0	\N	2016-08-15 02:08:06.933273	2016-08-15 02:08:06.933273	\N
322	248	13	4	37.749550	-122.187254	5.0	9.968428	3.0	\N	2016-08-15 02:08:08.581153	2016-08-15 02:08:08.581153	\N
323	272	5	4	37.749642	-122.187057	65.0	2.786967	10.1	\N	2016-08-15 02:08:51.70802	2016-08-15 02:08:51.70802	\N
324	24	5	4	37.749446	-122.187084	65.0	4.877453	10.0	\N	2016-08-15 02:09:17.764398	2016-08-15 02:09:17.764398	\N
325	42	5	4	37.749695	-122.187113	10.0	4.743696	4.0	\N	2016-08-15 02:09:39.018672	2016-08-15 02:09:39.018672	\N
326	24	5	4	37.749691	-122.187127	5.0	5.994703	4.0	\N	2016-08-15 02:09:53.275537	2016-08-15 02:09:53.275537	\N
327	18	13	4	37.749567	-122.187267	5.0	9.565321	3.0	\N	2016-08-15 02:10:01.558099	2016-08-15 02:10:01.558099	\N
328	53	5	4	37.749687	-122.187148	10.0	5.786085	4.0	\N	2016-08-15 02:10:09.140487	2016-08-15 02:10:09.140487	\N
329	2	5	4	37.749682	-122.187154	10.0	5.279280	4.0	\N	2016-08-15 02:10:20.542325	2016-08-15 02:10:20.542325	\N
330	8	13	4	37.749552	-122.187299	10.0	6.434919	4.0	\N	2016-08-15 02:10:35.034682	2016-08-15 02:10:35.034682	\N
331	14	13	4	37.749674	-122.187083	5.0	7.906202	4.0	\N	2016-08-15 02:10:42.388511	2016-08-15 02:10:42.388511	\N
332	26	13	4	37.749705	-122.187068	5.0	5.928236	3.0	\N	2016-08-15 02:10:54.067838	2016-08-15 02:10:54.067838	\N
333	55	13	4	37.749695	-122.187071	5.0	4.553755	3.0	\N	2016-08-15 02:11:41.906278	2016-08-15 02:11:41.906278	\N
334	274	13	4	37.749685	-122.187080	5.0	4.743147	3.0	\N	2016-08-15 02:11:59.240565	2016-08-15 02:11:59.240565	\N
335	50	13	4	37.749797	-122.187072	5.0	6.261518	4.0	\N	2016-08-15 02:12:07.641183	2016-08-15 02:12:07.641183	\N
336	275	13	4	37.749798	-122.187067	5.0	7.304304	4.0	\N	2016-08-15 02:12:20.334929	2016-08-15 02:12:20.334929	\N
337	32	13	4	37.749660	-122.187210	5.0	11.243605	6.0	\N	2016-08-15 02:12:37.323565	2016-08-15 02:12:37.323565	\N
338	15	13	4	37.749738	-122.187168	5.0	10.810865	3.0	\N	2016-08-15 02:12:54.214122	2016-08-15 02:12:54.214122	\N
339	33	13	4	37.749754	-122.187175	5.0	19.336042	6.0	\N	2016-08-15 02:13:13.008609	2016-08-15 02:13:13.008609	\N
340	46	13	4	37.749758	-122.187161	10.0	7.307722	4.0	\N	2016-08-15 02:13:21.958913	2016-08-15 02:13:21.958913	\N
341	60	13	4	37.749821	-122.187204	5.0	10.867598	4.0	\N	2016-08-15 02:13:35.002168	2016-08-15 02:13:35.002168	\N
342	25	13	4	37.749730	-122.187116	5.0	10.299391	3.0	\N	2016-08-15 02:13:54.454923	2016-08-15 02:13:54.454923	\N
343	48	13	4	37.749712	-122.187112	10.0	6.728010	4.0	\N	2016-08-15 02:14:09.482832	2016-08-15 02:14:09.482832	\N
344	58	13	4	37.749820	-122.187057	175.7	8.304152	10.0	\N	2016-08-15 02:14:38.070602	2016-08-15 02:14:38.070602	\N
345	23	13	4	37.749699	-122.187142	10.0	6.180311	4.0	\N	2016-08-15 02:14:41.799556	2016-08-15 02:14:41.799556	\N
346	21	13	4	37.749648	-122.187149	5.0	5.207685	4.0	\N	2016-08-15 02:14:54.508167	2016-08-15 02:14:54.508167	\N
347	276	13	4	37.749627	-122.187150	5.0	5.778883	6.0	\N	2016-08-15 02:15:07.889583	2016-08-15 02:15:07.889583	\N
348	45	13	4	37.749585	-122.187195	10.0	7.443373	12.0	\N	2016-08-15 02:15:25.564949	2016-08-15 02:15:25.564949	\N
349	17	13	4	37.749585	-122.187195	10.0	7.443373	12.0	\N	2016-08-15 02:15:36.031282	2016-08-15 02:15:36.031282	\N
350	277	13	4	37.749637	-122.187228	5.0	10.109388	3.0	\N	2016-08-15 02:15:44.524789	2016-08-15 02:15:44.524789	\N
351	20	13	4	37.749735	-122.187252	5.0	11.096205	3.0	\N	2016-08-15 02:15:58.129931	2016-08-15 02:15:58.129931	\N
352	20	13	4	37.749731	-122.187224	10.0	18.517347	12.0	\N	2016-08-15 02:16:25.980506	2016-08-15 02:16:25.980506	\N
353	52	13	4	37.749880	-122.187145	359.5	12.874861	13.4	\N	2016-08-15 02:16:47.101228	2016-08-15 02:16:47.101228	\N
354	56	13	4	37.749658	-122.186998	30.0	-3.543291	24.0	\N	2016-08-15 02:16:53.643953	2016-08-15 02:16:53.643953	\N
355	51	13	4	37.749660	-122.187059	65.0	3.615828	10.0	\N	2016-08-15 02:17:37.764303	2016-08-15 02:17:37.764303	\N
356	278	13	4	37.749622	-122.187094	5.0	4.920485	4.0	\N	2016-08-15 02:17:48.277424	2016-08-15 02:17:48.277424	\N
357	22	13	4	37.749657	-122.187148	5.0	8.183638	3.0	\N	2016-08-15 02:17:55.774819	2016-08-15 02:17:55.774819	\N
358	19	13	4	37.749721	-122.187095	5.0	7.522291	4.0	\N	2016-08-15 02:18:04.173195	2016-08-15 02:18:04.173195	\N
359	28	13	4	37.749721	-122.187134	5.0	9.788404	3.0	\N	2016-08-15 02:18:27.265898	2016-08-15 02:18:27.265898	\N
360	4	5	4	37.749662	-122.187139	5.0	4.883223	4.0	\N	2016-08-15 02:19:05.599719	2016-08-15 02:19:05.599719	\N
361	246	5	4	37.749582	-122.187171	65.0	5.247037	13.6	\N	2016-08-15 02:19:28.558498	2016-08-15 02:19:28.558498	\N
362	9	5	4	37.749646	-122.187108	5.0	3.118849	3.0	\N	2016-08-15 02:19:43.55089	2016-08-15 02:19:43.55089	\N
363	31	5	4	37.749571	-122.187224	65.0	6.194116	10.0	\N	2016-08-15 02:20:21.725812	2016-08-15 02:20:21.725812	\N
364	16	5	4	37.749643	-122.187159	65.0	5.304993	13.9	\N	2016-08-15 02:20:37.810158	2016-08-15 02:20:37.810158	\N
365	7	5	4	37.749747	-122.187014	65.0	4.992674	10.0	\N	2016-08-15 02:20:43.205878	2016-08-15 02:20:43.205878	\N
366	279	5	4	37.749662	-122.187164	10.0	7.208479	4.0	\N	2016-08-15 02:21:23.274285	2016-08-15 02:21:23.274285	\N
367	280	5	4	37.749759	-122.187098	5.0	9.662184	4.0	\N	2016-08-15 02:21:23.290534	2016-08-15 02:21:23.290534	\N
368	29	5	4	37.749696	-122.187159	5.0	12.243086	3.0	\N	2016-08-15 02:21:31.295441	2016-08-15 02:21:31.295441	\N
369	281	5	4	37.749712	-122.187157	5.0	13.129438	3.0	\N	2016-08-15 02:21:38.843601	2016-08-15 02:21:38.843601	\N
370	251	5	4	37.749695	-122.187158	5.0	19.465956	3.0	\N	2016-08-15 02:21:56.508912	2016-08-15 02:21:56.508912	\N
371	35	5	4	37.749707	-122.187184	5.0	20.222212	4.0	\N	2016-08-15 02:22:13.053063	2016-08-15 02:22:13.053063	\N
372	30	5	4	37.749703	-122.187183	5.0	22.010450	4.0	\N	2016-08-15 02:22:23.140741	2016-08-15 02:22:23.140741	\N
373	12	5	4	37.749654	-122.187169	65.0	15.056062	10.0	\N	2016-08-15 02:22:57.334981	2016-08-15 02:22:57.334981	\N
374	40	5	4	37.749640	-122.187137	65.0	8.345282	11.3	\N	2016-08-15 02:23:09.456109	2016-08-15 02:23:09.456109	\N
375	34	5	4	37.749794	-122.187194	5.0	15.066999	3.0	\N	2016-08-15 02:23:15.523742	2016-08-15 02:23:15.523742	\N
376	37	5	4	37.749794	-122.187194	5.0	17.255629	3.0	\N	2016-08-15 02:23:33.06759	2016-08-15 02:23:33.06759	\N
377	49	5	4	37.749642	-122.187167	65.0	20.394281	12.9	\N	2016-08-15 02:23:50.420207	2016-08-15 02:23:50.420207	\N
378	36	5	4	37.749771	-122.187177	5.0	10.305555	4.0	\N	2016-08-15 02:24:03.090769	2016-08-15 02:24:03.090769	\N
379	61	5	4	37.749771	-122.187177	5.0	12.554213	4.0	\N	2016-08-15 02:24:09.281086	2016-08-15 02:24:09.281086	\N
380	57	5	4	37.749765	-122.187138	5.0	10.559645	4.0	\N	2016-08-15 02:24:16.778573	2016-08-15 02:24:16.778573	\N
381	64	5	4	37.749736	-122.187145	5.0	13.468885	3.0	\N	2016-08-15 02:24:22.694013	2016-08-15 02:24:22.694013	\N
382	282	5	4	37.749736	-122.187145	5.0	12.356367	4.0	\N	2016-08-15 02:24:31.207394	2016-08-15 02:24:31.207394	\N
383	283	5	4	37.749737	-122.187144	5.0	15.234236	3.0	\N	2016-08-15 02:24:41.12385	2016-08-15 02:24:41.12385	\N
384	38	5	4	37.749737	-122.187144	5.0	16.122450	3.0	\N	2016-08-15 02:24:53.03608	2016-08-15 02:24:53.03608	\N
385	284	5	4	37.749675	-122.187107	65.0	6.902722	10.0	\N	2016-08-15 02:25:24.316839	2016-08-15 02:25:24.316839	\N
386	3	5	4	37.749704	-122.187133	5.0	7.623762	4.0	\N	2016-08-15 02:25:31.761104	2016-08-15 02:25:31.761104	\N
387	43	5	4	37.749551	-122.187127	10.0	5.772047	4.0	\N	2016-08-15 02:25:38.81522	2016-08-15 02:25:38.81522	\N
388	285	5	4	37.749587	-122.187128	5.0	6.491804	4.0	\N	2016-08-15 02:34:53.614896	2016-08-15 02:34:53.614896	\N
389	286	5	4	37.749720	-122.187087	65.0	6.030112	12.6	\N	2016-08-15 02:35:32.536392	2016-08-15 02:35:32.536392	\N
390	287	5	4	37.749639	-122.187272	30.0	11.902205	32.0	\N	2016-08-15 02:35:55.262723	2016-08-15 02:35:55.262723	\N
391	288	5	4	37.749639	-122.187272	5.0	7.742872	4.0	\N	2016-08-15 02:36:43.738949	2016-08-15 02:36:43.738949	\N
392	289	5	4	37.749736	-122.187147	10.0	6.522749	4.0	\N	2016-08-15 02:37:44.265395	2016-08-15 02:37:44.265395	\N
\.


--
-- Name: scans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"scans_id_seq"', 392, true);


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "schema_migrations" ("version") FROM stdin;
20160630213036
20160727230000
20160812001000
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: lrhxbgwasfaatn
--

COPY "users" ("id", "name", "email", "created_at", "updated_at") FROM stdin;
1	xian	\N	2016-07-26 17:34:14.213907	2016-07-26 17:34:14.213907
2	Tom	\N	2016-07-27 18:18:03.783848	2016-07-27 18:18:03.783848
3	Pounce	\N	2016-08-07 21:03:12.239172	2016-08-07 21:03:12.239172
4	Javi	\N	2016-08-07 21:58:53.5863	2016-08-07 21:58:53.5863
5	Bounce	\N	2016-08-08 02:07:36.505382	2016-08-08 02:07:36.505382
6	David 	\N	2016-08-10 21:55:40.099479	2016-08-10 21:55:40.099479
7	Dean	\N	2016-08-10 22:29:35.364579	2016-08-10 22:29:35.364579
8	David	\N	2016-08-10 23:58:53.484046	2016-08-10 23:58:53.484046
9	Joey	\N	2016-08-12 08:53:59.86172	2016-08-12 08:53:59.86172
10	Eric	\N	2016-08-13 19:27:18.984009	2016-08-13 19:27:18.984009
11	Brad	\N	2016-08-13 21:54:27.335221	2016-08-13 21:54:27.335221
12	Aaron	\N	2016-08-14 18:19:46.932064	2016-08-14 18:19:46.932064
13	Justin	\N	2016-08-14 20:33:48.359648	2016-08-14 20:33:48.359648
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lrhxbgwasfaatn
--

SELECT pg_catalog.setval('"users_id_seq"', 13, true);


--
-- Name: assets_labels_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "assets_labels"
    ADD CONSTRAINT "assets_labels_pkey" PRIMARY KEY ("id");


--
-- Name: assets_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "assets"
    ADD CONSTRAINT "assets_pkey" PRIMARY KEY ("id");


--
-- Name: events_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "events"
    ADD CONSTRAINT "events_pkey" PRIMARY KEY ("id");


--
-- Name: labels_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "labels"
    ADD CONSTRAINT "labels_pkey" PRIMARY KEY ("id");


--
-- Name: packing_list_assets_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "packing_list_assets"
    ADD CONSTRAINT "packing_list_assets_pkey" PRIMARY KEY ("id");


--
-- Name: packing_lists_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "packing_lists"
    ADD CONSTRAINT "packing_lists_pkey" PRIMARY KEY ("id");


--
-- Name: photos_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "photos"
    ADD CONSTRAINT "photos_pkey" PRIMARY KEY ("id");


--
-- Name: scans_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "scans"
    ADD CONSTRAINT "scans_pkey" PRIMARY KEY ("id");


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");


--
-- Name: index_assets_labels_on_asset_id_and_label_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE UNIQUE INDEX "index_assets_labels_on_asset_id_and_label_id" ON "assets_labels" USING "btree" ("asset_id", "label_id");


--
-- Name: index_assets_labels_on_label_id_and_asset_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_assets_labels_on_label_id_and_asset_id" ON "assets_labels" USING "btree" ("label_id", "asset_id");


--
-- Name: index_assets_on_container_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_assets_on_container_id" ON "assets" USING "btree" ("container_id");


--
-- Name: index_assets_on_name; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_assets_on_name" ON "assets" USING "btree" ("name");


--
-- Name: index_assets_on_state; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_assets_on_state" ON "assets" USING "btree" ("state");


--
-- Name: index_assets_on_tag; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_assets_on_tag" ON "assets" USING "btree" ("tag");


--
-- Name: index_labels_on_name; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE UNIQUE INDEX "index_labels_on_name" ON "labels" USING "btree" ("name");


--
-- Name: index_packing_list_assets_on_asset_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_packing_list_assets_on_asset_id" ON "packing_list_assets" USING "btree" ("asset_id");


--
-- Name: index_packing_list_assets_on_email; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_packing_list_assets_on_email" ON "packing_list_assets" USING "btree" ("email");


--
-- Name: index_packing_list_assets_on_packing_list_id_and_asset_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE UNIQUE INDEX "index_packing_list_assets_on_packing_list_id_and_asset_id" ON "packing_list_assets" USING "btree" ("packing_list_id", "asset_id");


--
-- Name: index_packing_lists_on_creator_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_packing_lists_on_creator_id" ON "packing_lists" USING "btree" ("creator_id");


--
-- Name: index_packing_lists_on_state; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_packing_lists_on_state" ON "packing_lists" USING "btree" ("state");


--
-- Name: index_photos_on_asset_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_photos_on_asset_id" ON "photos" USING "btree" ("asset_id");


--
-- Name: index_photos_on_scan_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_photos_on_scan_id" ON "photos" USING "btree" ("scan_id");


--
-- Name: index_scans_on_asset_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_scans_on_asset_id" ON "scans" USING "btree" ("asset_id");


--
-- Name: index_scans_on_container_scan_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_scans_on_container_scan_id" ON "scans" USING "btree" ("container_scan_id");


--
-- Name: index_scans_on_created_at; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_scans_on_created_at" ON "scans" USING "btree" ("created_at");


--
-- Name: index_scans_on_into_container_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_scans_on_into_container_id" ON "scans" USING "btree" ("into_container_id");


--
-- Name: index_scans_on_updated_at; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_scans_on_updated_at" ON "scans" USING "btree" ("updated_at");


--
-- Name: index_scans_on_user_id; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_scans_on_user_id" ON "scans" USING "btree" ("user_id");


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_users_on_email" ON "users" USING "btree" ("email");


--
-- Name: index_users_on_name; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE INDEX "index_users_on_name" ON "users" USING "btree" ("name");


--
-- Name: unique_schema_migrations; Type: INDEX; Schema: public; Owner: lrhxbgwasfaatn
--

CREATE UNIQUE INDEX "unique_schema_migrations" ON "schema_migrations" USING "btree" ("version");


--
-- Name: fk_rails_226edc1f39; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "photos"
    ADD CONSTRAINT "fk_rails_226edc1f39" FOREIGN KEY ("asset_id") REFERENCES "assets"("id");


--
-- Name: fk_rails_3395bfae95; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "scans"
    ADD CONSTRAINT "fk_rails_3395bfae95" FOREIGN KEY ("container_scan_id") REFERENCES "scans"("id");


--
-- Name: fk_rails_4349b2ff58; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "scans"
    ADD CONSTRAINT "fk_rails_4349b2ff58" FOREIGN KEY ("into_container_id") REFERENCES "assets"("id");


--
-- Name: fk_rails_805bef6743; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "assets_labels"
    ADD CONSTRAINT "fk_rails_805bef6743" FOREIGN KEY ("asset_id") REFERENCES "assets"("id");


--
-- Name: fk_rails_8cfa33fcbd; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "assets"
    ADD CONSTRAINT "fk_rails_8cfa33fcbd" FOREIGN KEY ("container_id") REFERENCES "assets"("id");


--
-- Name: fk_rails_8f34995fbb; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "scans"
    ADD CONSTRAINT "fk_rails_8f34995fbb" FOREIGN KEY ("asset_id") REFERENCES "assets"("id");


--
-- Name: fk_rails_ac9cf29706; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "scans"
    ADD CONSTRAINT "fk_rails_ac9cf29706" FOREIGN KEY ("event_id") REFERENCES "events"("id");


--
-- Name: fk_rails_ae43f03dd3; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "photos"
    ADD CONSTRAINT "fk_rails_ae43f03dd3" FOREIGN KEY ("scan_id") REFERENCES "scans"("id");


--
-- Name: fk_rails_b8c552d48e; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "scans"
    ADD CONSTRAINT "fk_rails_b8c552d48e" FOREIGN KEY ("user_id") REFERENCES "users"("id");


--
-- Name: fk_rails_bf0c4d939b; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "packing_lists"
    ADD CONSTRAINT "fk_rails_bf0c4d939b" FOREIGN KEY ("creator_id") REFERENCES "users"("id");


--
-- Name: fk_rails_fb1871eecc; Type: FK CONSTRAINT; Schema: public; Owner: lrhxbgwasfaatn
--

ALTER TABLE ONLY "assets_labels"
    ADD CONSTRAINT "fk_rails_fb1871eecc" FOREIGN KEY ("label_id") REFERENCES "labels"("id");


--
-- PostgreSQL database dump complete
--


/*
pire applicaiton database tables
*/

CREATE SCHEMA account;
CREATE SCHEMA review;

/* account */
CREATE TABLE account.student(
	id serial PRIMARY KEY,
	email text NOT NULL,
	studentid INTEGER NOT NULL,
	name text NOT NULL,
	surname text NOT NULL,
	password text NOT NULL,
	group_id INTEGER,
	FOREIGN KEY (group_id) REFERENCES account.group (id)
);

CREATE TABLE account.group(
	id serial PRIMARY KEY,
	name text NOT NULL,
	UNIQUE (name)
);

CREATE TABLE account.instructor(
	id serial PRIMARY KEY,
	email text NOT NULL UNIQUE,
	name text NOT NULL,
	surname text NOT NULL,
	password text NOT NULL
);

/* Review */
CREATE TABLE review.deliverable(
	id serial PRIMARY KEY,
	name text NOT NULL,
	url text NOT NULL,
	group_id INTEGER,
	FOREIGN KEY (group_id) REFERENCES account.group (id)  
);

CREATE TABLE review.review(
	id serial PRIMARY KEY,
	student_id INTEGER,
	deliverable_id INTEGER,
	review text NOT NULL,
	FOREIGN KEY (student_id) REFERENCES account.student (id),
	FOREIGN KEY (deliverable_id) REFERENCES review.deliverable (id) 
);

/* Poll */
CREATE TABLE poll.poll(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE poll.poll_question(
	id serial PRIMARY KEY,
	poll_id INTEGER,
	question TEXT,
	FOREIGN KEY (poll_id) REFERENCES poll.poll (id)  
);

CREATE TABLE poll.poll_answer(
	id serial PRIMARY KEY,
	poll_question_id INTEGER,
	student_id INTEGER,
	answer TEXT,
	FOREIGN KEY (poll_question_id) REFERENCES poll.poll_question (id),
	FOREIGN KEY (student_id) REFERENCES account.student (id)
);
/* Indexes */
CREATE UNIQUE INDEX ON account.student USING btree (email);
CREATE UNIQUE INDEX ON account.student USING btree (studentid);
CREATE UNIQUE INDEX ON account.group USING btree (name);
CREATE UNIQUE INDEX ON review.deliverable USING btree (id);
CREATE INDEX ON review.review USING btree (student_id);
CREATE INDEX ON review.review USING btree (deliverable_id);
CREATE UNIQUE INDEX ON account.instructor USING btree (email);
CREATE UNIQUE INDEX ON poll.poll USING btree (id);
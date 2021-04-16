/*
pire applicaiton database tables
*/

CREATE SCHEMA account;
CREATE SCHEMA review

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

/* Review */
create table review.deliverable(
	id serial primary key,
	name text not null,
	url text not null,
	group_id integer,
	foreign key (group_id) references account.group (id)  
);

/* Indexes */
CREATE UNIQUE INDEX ON account.student USING btree (email);
CREATE UNIQUE INDEX ON account.student USING btree (studentid);
CREATE UNIQUE INDEX ON account.group USING btree (name);




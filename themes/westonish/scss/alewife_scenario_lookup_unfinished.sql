

DROP TABLE IF EXISTS john.alewife_propchange_lookup;
CREATE TABLE john.alewife_propchange_lookup
	(
		alewife_id varchar,
		maplot_array varchar,
		propchange_status varchar
	);

ALTER TABLE john.alewife_propchange_lookup
	ALTER COLUMN maplot_array TYPE varchar[] using array[maplot_array];

UPDATE john.alewife_propchange_lookup
	SET maplot_array = '{267E-283,267E-282,267E-284,267E-285,267E-279,267E-280}'
	WHERE alewife_id = '45';

UPDATE john.alewife_propchange_lookup
	SET maplot_array = '{267F-283,267F-281,267F-279,267F-391,267F-293,267F-274}'
	WHERE alewife_id = '48';



DROP TABLE IF EXISTS john.boasr_propchange;
CREATE TABLE john.boasr_propchange AS
	SELECT
		bo.*,
		prop.*
	FROM p1533_cambridge.buildout_assessing bo
	LEFT JOIN john.alewife_propchange_lookup prop
	ON bo.maplot = ANY (maplot_array);
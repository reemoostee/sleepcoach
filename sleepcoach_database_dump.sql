-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `accesstokens`
--

CREATE TABLE `accesstokens` (
  `id` int(11) NOT NULL,
  `accesstoken` varchar(100) NOT NULL,
  `used` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `accesstoken` varchar(100) NOT NULL,
  `question_001a` int(11) NOT NULL,
  `question_001b` int(11) NOT NULL,
  `question_001c` int(11) NOT NULL,
  `question_001d` int(11) NOT NULL,
  `question_001e` int(11) NOT NULL,
  `question_002a` int(11) NOT NULL,
  `question_002b` int(11) NOT NULL,
  `question_002c` int(11) NOT NULL,
  `question_002d` int(11) NOT NULL,
  `question_002e` int(11) NOT NULL,
  `question_003a` int(11) NOT NULL,
  `question_003b` int(11) NOT NULL,
  `question_003c` int(11) NOT NULL,
  `question_003d` int(11) NOT NULL,
  `question_003e` int(11) NOT NULL,
  `question_004a` int(11) NOT NULL,
  `question_004b` int(11) NOT NULL,
  `question_004c` int(11) NOT NULL,
  `question_004d` int(11) NOT NULL,
  `question_004e` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hygiene`
--

CREATE TABLE `hygiene` (
  `id` int(11) NOT NULL,
  `accesstoken` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `valence` int(11) NOT NULL,
  `arousal` int(11) NOT NULL,
  `matrace` int(11) NOT NULL,
  `noise` int(11) NOT NULL,
  `smell` int(11) NOT NULL,
  `brightness` int(11) NOT NULL,
  `room` int(11) NOT NULL,
  `ponder` int(11) NOT NULL,
  `planing` int(11) NOT NULL,
  `thinking` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `quality`
--

CREATE TABLE `quality` (
  `id` int(11) NOT NULL,
  `accesstoken` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `restorationAfterSleep` int(11) NOT NULL,
  `difficultyInFallingAsleep` int(11) NOT NULL,
  `difficultyInGettingUp` int(11) NOT NULL,
  `satisfactionWithSleep` int(11) NOT NULL,
  `difficultyInMaintainingSleep` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `accesstokens`
--
ALTER TABLE `accesstokens`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `hygiene`
--
ALTER TABLE `hygiene`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `quality`
--
ALTER TABLE `quality`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `accesstokens`
--
ALTER TABLE `accesstokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2265;

--
-- AUTO_INCREMENT für Tabelle `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT für Tabelle `hygiene`
--
ALTER TABLE `hygiene`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=475;

--
-- AUTO_INCREMENT für Tabelle `quality`
--
ALTER TABLE `quality`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=315;
COMMIT;
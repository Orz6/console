describe('units', function() {
  'use strict';

  describe('round', function () {
    function testRound (n, expected) {
      it(n + ' into ' + expected, function () {
        expect(tectonicTesting.units.round(n)).toEqual(expected);
      });
    }

    testRound(100, 100);
    testRound(NaN, 0);
    testRound(100.101010, 100.10);
    testRound(.101010, .10);
    testRound(111.119, 111.12);
    testRound(999.999, 1000);
  });

  describe('should humanize numeric values', function () {
    function test_ (value, expected) {
      it(value + ' into ' + expected, function () {
        expect(tectonicTesting.units.humanize(value, 'numeric', false).string).toEqual(expected);
      });
    }

    test_('banana', '0');
    test_(-1, '-1');
    test_(-0, '0');
    test_(1/0, '0');
    test_(-1/0, '0');
    test_('100$', '0');
    test_(Number.MIN_VALUE, '5e-324');
    test_(0, '0');
    test_(0.1234, '0.1234');
    test_(NaN, '0');
    test_(1, '1');
    test_(12, '12');
    test_(123, '123');
    test_(123.123, '123.123');
    test_(999.999, '999.999');
    test_(1000, '1k');
    test_(1001, '1.001k');
    test_(1011, '1.011k');
    test_(5123, '5.123k');
    test_(10000, '10k');
    test_(10234, '10.234k');
    test_(100000, '100k');
    test_(1000000, '1m');
    test_(10000000, '10m');
    test_(100000000, '100m');
    test_(1000000000, '1b');
    test_(10000000000, '10b');
    test_(100000000000, '100b');
    test_(1000000000000, '1000b');
    test_(1000000000001, '1000.000000001b');
  });

  describe('should humanize percentage values', function () {
    function test_ (value, expected) {
      it(value + ' into ' + expected, function () {
        expect(tectonicTesting.units.humanize(value, 'percentage', false).string).toEqual(expected);
      });
    }

    test_('banana', '0%');
    test_(-1, '-1%');
    test_(-0, '0%');
    test_(1/0, '0%');
    test_(-1/0, '0%');
    test_('100$', '0%');
    test_(Number.MIN_VALUE, '5e-324%');
    test_(0, '0%');
    test_(0.1234, '0.1234%');
    test_(NaN, '0%');
    test_(1, '1%');
    test_(12, '12%');
    test_(123, '123%');
    test_(123.123, '123.123%');
    test_(999.999, '999.999%');
    test_(1.000, '1%');
    test_(1.001, '1.001%');
    test_(1.011, '1.011%');
    test_(5.123, '5.123%');
    test_(10.000, '10%');
    test_(10.234, '10.234%');
    test_(100, '100%');
    test_(1000, '1000%');
    test_(10000, '10000%');
    test_(100000, '100000%');
    test_(1000000, '1000000%');
    test_(10000000, '10000000%');
    test_(100000000, '100000000%');
    test_(1000000000, '1000000000%');
    test_(1000000001, '1000000001%');
  });

  describe('should humanize decimalBytes values', function () {
    function test_ (value, expected) {
      it(value + ' into ' + expected, function () {
        expect(tectonicTesting.units.humanize(value, 'decimalBytes', true).string).toEqual(expected);
      });
    }

    test_('banana', '0 B');
    test_(-1, '-1 B');
    test_(-0, '0 B');
    test_(1/0, '0 B');
    test_(-1/0, '0 B');
    test_('100$', '0 B');
    test_(Number.MIN_VALUE, '0 B');
    test_(0, '0 B');
    test_(NaN, '0 B');
    test_(1, '1 B');
    test_(12, '12 B');
    test_(123, '123 B');
    test_(123.123, '123.12 B');
    test_(999.999, '1 KB');
    test_(1000, '1 KB');
    test_(1001, '1 KB');
    test_(1011, '1.01 KB');
    test_(5123, '5.12 KB');
    test_(10000, '10 KB');
    test_(10234, '10.23 KB');
    test_(100000, '100 KB');
    test_(1000000, '1 MB');
    test_(10000000, '10 MB');
    test_(100000000, '100 MB');
    test_(1000000000, '1 GB');
    test_(1000000000000, '1 TB');
    test_(1000000000000000, '1 PB');
    test_(1000000000000000000, '1 EB');
    test_(1000000000000000000000, '1000 EB');
  });

  describe('should humanize binaryBytes values', function () {
    function test_ (value, expected) {
      it(value + ' into ' + expected, function () {
        expect(tectonicTesting.units.humanize(value, 'binaryBytes', true).string).toEqual(expected);
      });
    }

    test_('banana', '0 iB');
    test_(-1, '-1 iB');
    test_(-0, '0 iB');
    test_(1/0, '0 iB');
    test_(-1/0, '0 iB');
    test_('100$', '0 iB');
    test_(Number.MIN_VALUE, '0 iB');
    test_(0, '0 iB');
    test_(NaN, '0 iB');
    test_(1, '1 iB');
    test_(12, '12 iB');
    test_(123, '123 iB');
    test_(123.123, '123.12 iB');
    test_(999.999, '1000 iB');
    test_(1023, '1023 iB');
    test_(1023.999, '1 KiB');
    test_(1024, '1 KiB');
    test_(1025, '1 KiB');
    test_(1035, '1.01 KiB');
    test_(5242.88, '5.12 KiB');
    test_(10240, '10 KiB');
    test_(10475.52, '10.23 KiB');
    test_(102400, '100 KiB');
    test_(1048576, '1 MiB');
    test_(10485760, '10 MiB');
    test_(104857600, '100 MiB');
    test_(1073741824, '1 GiB');
    test_(1099511627776, '1 TiB');
    test_(1125899906842624, '1 PiB');
  });

  describe('should humanize binaryBytesWithoutB values', function () {
    function test_ (value, expected) {
      it(value + ' into ' + expected, function () {
        expect(tectonicTesting.units.humanize(value, 'binaryBytesWithoutB', true).string).toEqual(expected);
      });
    }

    test_('banana', '0 i');
    test_(-1, '-1 i');
    test_(-0, '0 i');
    test_(1/0, '0 i');
    test_(-1/0, '0 i');
    test_('100$', '0 i');
    test_(Number.MIN_VALUE, '0 i');
    test_(0, '0 i');
    test_(NaN, '0 i');
    test_(1, '1 i');
    test_(12, '12 i');
    test_(123, '123 i');
    test_(123.123, '123.12 i');
    test_(999.999, '1000 i');
    test_(1023, '1023 i');
    test_(1023.999, '1 Ki');
    test_(1024, '1 Ki');
    test_(1025, '1 Ki');
    test_(1035, '1.01 Ki');
    test_(5242.88, '5.12 Ki');
    test_(10240, '10 Ki');
    test_(10475.52, '10.23 Ki');
    test_(102400, '100 Ki');
    test_(1048576, '1 Mi');
    test_(10485760, '10 Mi');
    test_(104857600, '100 Mi');
    test_(1073741824, '1 Gi');
    test_(1099511627776, '1 Ti');
    test_(1125899906842624, '1 Pi');
  });

  describe('should de-humanize binaryBytesWithoutB values', function () {
    function test_ (value, expected) {
      it(value + ' into ' + expected, function () {
        expect(tectonicTesting.units.dehumanize(value, 'binaryBytesWithoutB').value).toEqual(expected);
      });
    }

    test_('banana', 'banana');
    test_(-1, -1);
    test_(-0, -0);
    test_(0, 0);
    test_(1/0, 1/0);
    test_(-1/0, -1/0);
    test_('100$', '100$');
    test_(Number.MIN_VALUE, Number.MIN_VALUE);
    test_('0i', 0);
    test_(NaN, NaN);
    test_('1i', 1);
    test_('12i', 12);
    test_('123i', 123);
    test_('123.12i', 123.12);
    test_('999.99i', 999.99);
    test_('100Ki', 102400);
    test_('3857916Ki', 3950505984);
    test_('101Ki', 103424);
    test_('1.01Ki', 1034.24);
    test_('5.12Ki', 5242.88);
    test_('10Ki', 10240);
    test_('10.23Ki', 10475.52);
    test_('100Ki', 102400);
    test_('1Mi', 1048576);
    test_('10Mi', 10485760);
    test_('100Mi', 104857600);
    test_('1Gi', 1073741824);
    test_('1Ti', 1099511627776);
    test_('1Pi', 1125899906842624);
    test_('100 i', 100);
    test_('100 Ki', 102400);
  });
});
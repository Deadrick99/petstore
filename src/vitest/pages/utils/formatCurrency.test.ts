import { expect, test } from "vitest";
import { formatCurrency } from "../../../pages/utilities/formatCurrency";

test("should format currency with dollar sign", () => {
  const results = [
    formatCurrency(0),
    formatCurrency(1),
    formatCurrency(2),
    formatCurrency(10),
    formatCurrency(99),
    formatCurrency(100),
    formatCurrency(500),
    formatCurrency(999),
  ];

  expect(results).toStrictEqual(["$0.00", "$1.00", "$2.00", "$10.00", "$99.00", "$100.00", "$500.00", "$999.00"]);
});

test("should format currency with correct cents including rounding", () => {
  const results = [
    formatCurrency(0.0),
    formatCurrency(0.01),
    formatCurrency(0.02),
    formatCurrency(0.5),
    formatCurrency(0.99),
    formatCurrency(0.999),
    formatCurrency(0.001),
    formatCurrency(0.004),
    formatCurrency(0.005),
    formatCurrency(0.009),
  ];

  expect(results).toStrictEqual([
    "$0.00",
    "$0.01",
    "$0.02",
    "$0.50",
    "$0.99",
    "$1.00",
    "$0.00",
    "$0.00",
    "$0.01",
    "$0.01",
  ]);
});

test("should format currency with commas separating thousands", () => {
  const results = [
    formatCurrency(0),
    formatCurrency(999),
    formatCurrency(1000),
    formatCurrency(1001),
    formatCurrency(1999),
    formatCurrency(2000),
    formatCurrency(9999),
    formatCurrency(10000),
    formatCurrency(999999),
    formatCurrency(1000000),
    formatCurrency(999999999),
    formatCurrency(1000000000),
  ];

  expect(results).toStrictEqual([
    "$0.00",
    "$999.00",
    "$1,000.00",
    "$1,001.00",
    "$1,999.00",
    "$2,000.00",
    "$9,999.00",
    "$10,000.00",
    "$999,999.00",
    "$1,000,000.00",
    "$999,999,999.00",
    "$1,000,000,000.00",
  ]);
});

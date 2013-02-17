/*
 * MyObject.cpp
 *
 *  Created on: Feb 16, 2013
 *      Author: sashby
 */

#include "MyObject.h"

namespace ashby {

MyObject::MyObject()
: m_a(0.0), m_b(0.0)
{}

MyObject::~MyObject()
{}

void MyObject::setA(double a) {
	m_a = a;
}

void MyObject::setB(double b) {
	m_b = b;
}

double MyObject::getA() const {
	return m_a;
}

double MyObject::getB() const {
	return m_b;
}


} /* namespace ashby */

/*
 * MyObject.h
 *
 *  Created on: Feb 16, 2013
 *      Author: sashby
 */

#ifndef MYOBJECT_H_
#define MYOBJECT_H_

namespace ashby {

class MyObject {
public:
	MyObject();

	virtual ~MyObject();

	void setA(double a);
	void setB(double b);

	double getA() const;
	double getB() const;

private:
	double m_a;
	double m_b;
};

} /* namespace ashby */
#endif /* MYOBJECT_H_ */

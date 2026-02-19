import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { saveTaskProgress, getTaskProgress } from '../utils/storage';
import CustomHeader from './CustomHeader';


function Checklist({ userProfile, onNavigate }) {
  const { province, location } = userProfile;

  // Helper function to get province-specific tasks
  // Helper function to get province-specific tasks
const getProvinceTasks = () => {
  const healthcareTask = {
    BC: {
      id: 1,
      title: 'Get BC Services Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for your BC Services Card to access healthcare services in British Columbia.',
      requirements: [
        'Valid passport or travel document',
        'Proof of BC residency (utility bill, rental agreement)',
        'Work Permit, Study Permit, or Proof of Address'
      ],
      steps: [
        'Visit a Service BC location or apply online',
        'Bring required documents',
        'Complete the application form',
        'Take your photo',
        'Receive temporary card immediately, permanent card arrives by mail in 2-3 weeks'
      ],
      links: [
        { text: 'Service BC Locations', url: 'https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc' },
        { text: 'Apply for MSP', url: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment/how-to-enrol' }
      ],
      estimatedTime: '1-2 hours'
    },
    ON: {
      id: 1,
      title: 'Get Ontario Health Card (OHIP)',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for your Ontario Health Insurance Plan (OHIP) card for healthcare coverage.',
      requirements: [
        'Valid passport or travel document',
        'Work Permit or Study Permit',
        'Proof of Ontario residency',
        'Immigration documents'
      ],
      steps: [
        'Visit a ServiceOntario location',
        'Complete application form',
        'Submit required documents',
        'Wait for 3-month waiting period (if applicable)',
        'Receive OHIP card by mail'
      ],
      links: [
        { text: 'ServiceOntario Locations', url: 'https://www.ontario.ca/page/serviceontario' },
        { text: 'OHIP Eligibility', url: 'https://www.ontario.ca/page/apply-ohip-and-get-health-card' }
      ],
      estimatedTime: '1-2 hours'
    },
    AB: {
      id: 1,
      title: 'Get Alberta Health Care Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Register for Alberta Health Care Insurance Plan (AHCIP) for healthcare coverage.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of Alberta residency',
        'Social Insurance Number (helpful but not required)'
      ],
      steps: [
        'Complete online application or visit Alberta Health office',
        'Submit required documents',
        'Wait for approval',
        'Receive Alberta Health Care card by mail',
        'Note: May have 3-month waiting period'
      ],
      links: [
        { text: 'Apply for AHCIP', url: 'https://www.alberta.ca/ahcip-apply' },
        { text: 'Alberta Health Services', url: 'https://www.albertahealthservices.ca/' }
      ],
      estimatedTime: '1-2 hours'
    },
    QC: {
      id: 1,
      title: 'Get Quebec Health Insurance Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for RAMQ (Régie de l\'assurance maladie du Québec) health insurance card.',
      requirements: [
        'Valid passport',
        'Immigration documents (CSQ, Work/Study Permit)',
        'Proof of Quebec residency',
        'Birth certificate or equivalent'
      ],
      steps: [
        'Complete RAMQ application online or in person',
        'Submit required documents',
        'Attend interview if required',
        'Wait for 3-month waiting period (if applicable)',
        'Receive health insurance card by mail'
      ],
      links: [
        { text: 'RAMQ Website', url: 'https://www.ramq.gouv.qc.ca/en' },
        { text: 'Apply for Health Insurance', url: 'https://www.ramq.gouv.qc.ca/en/citizens/health-insurance' }
      ],
      estimatedTime: '1-2 hours'
    },
    SK: {
      id: 1,
      title: 'Get Saskatchewan Health Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Saskatchewan Health Services card for healthcare coverage.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of Saskatchewan residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application online or at eHealth office',
        'Submit required documents',
        'Wait for approval',
        'Receive health card by mail',
        'Note: May have 3-month waiting period'
      ],
      links: [
        { text: 'Apply for SK Health Card', url: 'https://www.ehealthsask.ca/residents/health-cards/Pages/default.aspx' },
        { text: 'eHealth Saskatchewan', url: 'https://www.ehealthsask.ca/' }
      ],
      estimatedTime: '1-2 hours'
    },
    MB: {
      id: 1,
      title: 'Get Manitoba Health Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Manitoba Health card for healthcare coverage.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of Manitoba residency',
        'Social Insurance Number (if available)'
      ],
      steps: [
        'Complete application online or at Manitoba Health office',
        'Submit required documents',
        'Wait for approval',
        'Receive health card by mail',
        'Note: May have 3-month waiting period'
      ],
      links: [
        { text: 'Apply for MB Health Card', url: 'https://www.gov.mb.ca/health/mhsip/index.html' },
        { text: 'Manitoba Health', url: 'https://www.gov.mb.ca/health/' }
      ],
      estimatedTime: '1-2 hours'
    },
    NB: {
      id: 1,
      title: 'Get New Brunswick Medicare Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for New Brunswick Medicare card for healthcare coverage.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of New Brunswick residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application at Service New Brunswick',
        'Submit required documents',
        'Wait for approval',
        'Receive Medicare card by mail'
      ],
      links: [
        { text: 'Apply for NB Medicare', url: 'https://www2.gnb.ca/content/gnb/en/services/services_renderer.201363.Medicare___Registration.html' },
        { text: 'Service New Brunswick', url: 'https://www2.snb.ca/content/snb/en.html' }
      ],
      estimatedTime: '1-2 hours'
    },
    NS: {
      id: 1,
      title: 'Get Nova Scotia Health Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Nova Scotia MSI (Medical Services Insurance) card.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of Nova Scotia residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application at Service Nova Scotia',
        'Submit required documents',
        'Wait for approval',
        'Receive MSI card by mail',
        'Note: May have 3-month waiting period'
      ],
      links: [
        { text: 'Apply for NS Health Card', url: 'https://beta.novascotia.ca/apply-msi-nova-scotia-health-card' },
        { text: 'Nova Scotia Health', url: 'https://www.nshealth.ca/' }
      ],
      estimatedTime: '1-2 hours'
    },
    PE: {
      id: 1,
      title: 'Get PEI Health Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Prince Edward Island Health Card.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of PEI residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application at Health PEI office',
        'Submit required documents',
        'Wait for approval',
        'Receive health card by mail',
        'Note: May have 3-month waiting period'
      ],
      links: [
        { text: 'Apply for PEI Health Card', url: 'https://www.princeedwardisland.ca/en/information/health-pei/health-cards' },
        { text: 'Health PEI', url: 'https://www.princeedwardisland.ca/en/topic/health-pei' }
      ],
      estimatedTime: '1-2 hours'
    },
    NL: {
      id: 1,
      title: 'Get Newfoundland and Labrador MCP Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Medical Care Plan (MCP) card.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of NL residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application online or at MCP office',
        'Submit required documents',
        'Wait for approval',
        'Receive MCP card by mail',
        'Note: May have 3-month waiting period'
      ],
      links: [
        { text: 'Apply for MCP Card', url: 'https://www.gov.nl.ca/hcs/mcp/' },
        { text: 'NL Health Services', url: 'https://www.gov.nl.ca/hcs/' }
      ],
      estimatedTime: '1-2 hours'
    },
    YT: {
      id: 1,
      title: 'Get Yukon Health Care Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Yukon Health Insurance card.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of Yukon residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application at Yukon Health office',
        'Submit required documents',
        'Wait for approval',
        'Receive health card by mail',
        'Note: May have 3-month waiting period'
      ],
      links: [
        { text: 'Apply for Yukon Health Card', url: 'https://yukon.ca/en/health-and-wellness/health-insurance/apply-yukon-health-care-insurance' },
        { text: 'Yukon Health', url: 'https://yukon.ca/en/health-and-wellness' }
      ],
      estimatedTime: '1-2 hours'
    },
    NT: {
      id: 1,
      title: 'Get NWT Health Care Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Northwest Territories Health Care card.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of NWT residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application at NWT Health office',
        'Submit required documents',
        'Wait for approval',
        'Receive health card by mail'
      ],
      links: [
        { text: 'Apply for NWT Health Card', url: 'https://www.hss.gov.nt.ca/en/services/nwt-health-care-card' },
        { text: 'NWT Health Services', url: 'https://www.hss.gov.nt.ca/' }
      ],
      estimatedTime: '1-2 hours'
    },
    NU: {
      id: 1,
      title: 'Get Nunavut Health Care Card',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Apply for Nunavut Health Care card.',
      requirements: [
        'Valid passport',
        'Immigration documents (Work/Study Permit)',
        'Proof of Nunavut residency',
        'Previous health card (if applicable)'
      ],
      steps: [
        'Complete application at Nunavut Health office',
        'Submit required documents',
        'Wait for approval',
        'Receive health card by mail'
      ],
      links: [
        { text: 'Apply for Nunavut Health Card', url: 'https://www.gov.nu.ca/health/information/health-care-card' },
        { text: 'Nunavut Health', url: 'https://www.gov.nu.ca/health' }
      ],
      estimatedTime: '1-2 hours'
    }
  };

  const driversLicenseTask = {
    BC: {
      id: 4,
      title: 'Get ICBC Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for a BC driver\'s license if you plan to drive. ICBC handles all licensing in BC.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'BC Services Card',
        'Eye exam from optometrist (if required)'
      ],
      steps: [
        'Determine if you need to take knowledge and road tests',
        'Visit ICBC office',
        'Take knowledge test (if required)',
        'Book road test (if required)',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'ICBC New to BC', url: 'https://www.icbc.com/driver-licensing/moving-bc/Pages/Moving-from-another-country.aspx' },
        { text: 'Find ICBC Office', url: 'https://www.icbc.com/locators/Pages/default.aspx' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    ON: {
      id: 4,
      title: 'Get Ontario Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Ontario G-class driver\'s license through ServiceOntario.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of Ontario residency'
      ],
      steps: [
        'Visit ServiceOntario location',
        'Pass vision test',
        'Take G1 knowledge test (if no license exchange)',
        'Practice with G1 license',
        'Book and pass G2 road test',
        'Book and pass G test for full license'
      ],
      links: [
        { text: 'Get Ontario Driver\'s License', url: 'https://www.ontario.ca/page/get-g-drivers-licence-new-drivers' },
        { text: 'Exchange Foreign License', url: 'https://www.ontario.ca/page/exchange-out-province-drivers-licence' }
      ],
      estimatedTime: 'Varies (months if taking tests)'
    },
    AB: {
      id: 4,
      title: 'Get Alberta Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Alberta Class 5 driver\'s license at an Alberta Registry.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision screening',
        'Proof of Alberta residency'
      ],
      steps: [
        'Visit Alberta Registry office',
        'Complete vision screening',
        'Take knowledge test (if no license exchange)',
        'Pass road test (if required)',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get Alberta License', url: 'https://www.alberta.ca/get-drivers-licence' },
        { text: 'Find Registry Office', url: 'https://www.alberta.ca/find-registry-agent' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    QC: {
      id: 4,
      title: 'Get Quebec Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Quebec Class 5 driver\'s license through SAAQ.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of Quebec residency',
        'French language proficiency (for some tests)'
      ],
      steps: [
        'Visit SAAQ service center',
        'Pass vision test',
        'Take knowledge test in French or English',
        'Complete driving course (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'SAAQ Driver\'s License', url: 'https://saaq.gouv.qc.ca/en/drivers-licences/' },
        { text: 'Exchange Foreign License', url: 'https://saaq.gouv.qc.ca/en/drivers-licences/obtaining-licence/foreign-licence/' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    SK: {
      id: 4,
      title: 'Get Saskatchewan Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Saskatchewan Class 5 driver\'s license through SGI.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of Saskatchewan residency'
      ],
      steps: [
        'Visit SGI Motor License Issuer',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get SK Driver\'s License', url: 'https://www.sgi.sk.ca/drivers-licences' },
        { text: 'Exchange Foreign License', url: 'https://www.sgi.sk.ca/foreign-drivers-licence' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    MB: {
      id: 4,
      title: 'Get Manitoba Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Manitoba Class 5 driver\'s license through MPI.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of Manitoba residency'
      ],
      steps: [
        'Visit Manitoba Public Insurance office',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get MB Driver\'s License', url: 'https://www.mpi.mb.ca/Pages/new-to-manitoba.aspx' },
        { text: 'MPI Locations', url: 'https://www.mpi.mb.ca/' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    NB: {
      id: 4,
      title: 'Get New Brunswick Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for New Brunswick Class 5 driver\'s license.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of New Brunswick residency'
      ],
      steps: [
        'Visit Service New Brunswick',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get NB Driver\'s License', url: 'https://www2.gnb.ca/content/gnb/en/services/services_renderer.201088.Drivers_Licence_-_Application.html' },
        { text: 'Service New Brunswick', url: 'https://www2.snb.ca/' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    NS: {
      id: 4,
      title: 'Get Nova Scotia Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Nova Scotia Class 5 driver\'s license.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of Nova Scotia residency'
      ],
      steps: [
        'Visit Access Nova Scotia',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get NS Driver\'s License', url: 'https://beta.novascotia.ca/get-drivers-licence-nova-scotia' },
        { text: 'Access Nova Scotia', url: 'https://beta.novascotia.ca/programs-and-services/access-nova-scotia-centres' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    PE: {
      id: 4,
      title: 'Get PEI Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Prince Edward Island Class 5 driver\'s license.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of PEI residency'
      ],
      steps: [
        'Visit Access PEI',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get PEI Driver\'s License', url: 'https://www.princeedwardisland.ca/en/information/transportation-and-infrastructure/drivers-licence' },
        { text: 'Access PEI Locations', url: 'https://www.princeedwardisland.ca/en/information/finance/access-pei-locations' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    NL: {
      id: 4,
      title: 'Get NL Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Newfoundland and Labrador Class 5 driver\'s license.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of NL residency'
      ],
      steps: [
        'Visit Motor Registration Division',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get NL Driver\'s License', url: 'https://www.gov.nl.ca/dgsnl/drivers/' },
        { text: 'Motor Registration', url: 'https://www.gov.nl.ca/dgsnl/drivers/licences/' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    YT: {
      id: 4,
      title: 'Get Yukon Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Yukon Class 5 driver\'s license.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of Yukon residency'
      ],
      steps: [
        'Visit Motor Vehicles office',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get Yukon Driver\'s License', url: 'https://yukon.ca/en/driving-and-transportation/drivers-licences' },
        { text: 'Motor Vehicles Yukon', url: 'https://yukon.ca/en/driving-and-transportation' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    NT: {
      id: 4,
      title: 'Get NWT Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Northwest Territories Class 5 driver\'s license.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of NWT residency'
      ],
      steps: [
        'Visit Motor Vehicles office',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get NWT Driver\'s License', url: 'https://www.inf.gov.nt.ca/en/services/drivers-and-vehicles' },
        { text: 'NWT Motor Vehicles', url: 'https://www.inf.gov.nt.ca/' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    },
    NU: {
      id: 4,
      title: 'Get Nunavut Driver\'s License',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Apply for Nunavut Class 5 driver\'s license.',
      requirements: [
        'Valid foreign driver\'s license (if applicable)',
        'Two pieces of ID',
        'Vision test',
        'Proof of Nunavut residency'
      ],
      steps: [
        'Visit Motor Vehicles office',
        'Pass vision test',
        'Take knowledge test (if no license exchange)',
        'Complete learner period (if required)',
        'Pass road test',
        'Pay fees and receive license'
      ],
      links: [
        { text: 'Get Nunavut Driver\'s License', url: 'https://www.gov.nu.ca/economic-development-and-transportation/information/motor-vehicles' },
        { text: 'Nunavut Transportation', url: 'https://www.gov.nu.ca/economic-development-and-transportation' }
      ],
      estimatedTime: '2-3 hours (plus test time)'
    }
  };

  const mspTask = {
    BC: {
      id: 5,
      title: 'Register for MSP',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Medical Services Plan (MSP) provides coverage for medically required services in BC.',
      requirements: [
        'BC Services Card application (or existing card)',
        'Immigration documents',
        'Proof of BC residency'
      ],
      steps: [
        'Apply online or by mail',
        'Wait for 3-month waiting period (if applicable)',
        'Receive MSP confirmation',
        'Get temporary private insurance for waiting period'
      ],
      links: [
        { text: 'MSP Enrollment', url: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment' }
      ],
      estimatedTime: '30 minutes (plus waiting period)'
    },
    ON: {
      id: 5,
      title: 'Activate Your OHIP Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Ontario Health Insurance Plan coverage is active after the waiting period.',
      requirements: [
        'OHIP card',
        'Proof of continued Ontario residency'
      ],
      steps: [
        'Wait for 3-month waiting period to end',
        'Verify coverage is active',
        'Carry OHIP card at all times',
        'Update address if you move'
      ],
      links: [
        { text: 'OHIP Coverage', url: 'https://www.ontario.ca/page/what-ohip-covers' }
      ],
      estimatedTime: 'Automatic after waiting period'
    },
    AB: {
      id: 5,
      title: 'Activate Alberta Health Care',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Alberta Health Care Insurance Plan is active.',
      requirements: [
        'Alberta Health Care card',
        'Continued Alberta residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'Alberta Health Coverage', url: 'https://www.alberta.ca/ahcip' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    QC: {
      id: 5,
      title: 'Activate RAMQ Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Quebec health insurance is active through RAMQ.',
      requirements: [
        'RAMQ card',
        'Proof of Quebec residency'
      ],
      steps: [
        'Wait for waiting period to end (if applicable)',
        'Verify coverage status online',
        'Carry RAMQ card at all times',
        'Update address if you move'
      ],
      links: [
        { text: 'RAMQ Coverage', url: 'https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/coverage' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    SK: {
      id: 5,
      title: 'Activate Saskatchewan Health Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Saskatchewan health insurance is active.',
      requirements: [
        'Saskatchewan Health Card',
        'Continued Saskatchewan residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'SK Health Coverage', url: 'https://www.ehealthsask.ca/' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    MB: {
      id: 5,
      title: 'Activate Manitoba Health Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Manitoba health insurance is active.',
      requirements: [
        'Manitoba Health Card',
        'Continued Manitoba residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'MB Health Coverage', url: 'https://www.gov.mb.ca/health/' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    NB: {
      id: 5,
      title: 'Activate New Brunswick Medicare',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your New Brunswick Medicare is active.',
      requirements: [
        'New Brunswick Medicare Card',
        'Continued New Brunswick residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'NB Medicare', url: 'https://www2.gnb.ca/content/gnb/en/departments/health.html' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    NS: {
      id: 5,
      title: 'Activate Nova Scotia MSI',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Nova Scotia Medical Services Insurance is active.',
      requirements: [
        'Nova Scotia Health Card',
        'Continued Nova Scotia residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'NS MSI Coverage', url: 'https://beta.novascotia.ca/programs-and-services/msi-coverage-and-services' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    PE: {
      id: 5,
      title: 'Activate PEI Health Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Prince Edward Island health insurance is active.',
      requirements: [
        'PEI Health Card',
        'Continued PEI residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'PEI Health Coverage', url: 'https://www.princeedwardisland.ca/en/topic/health-pei' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    NL: {
      id: 5,
      title: 'Activate NL Medical Care Plan',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Newfoundland and Labrador Medical Care Plan is active.',
      requirements: [
        'NL MCP Card',
        'Continued NL residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'NL MCP Coverage', url: 'https://www.gov.nl.ca/hcs/mcp/' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    YT: {
      id: 5,
      title: 'Activate Yukon Health Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Yukon health insurance is active.',
      requirements: [
        'Yukon Health Card',
        'Continued Yukon residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'Yukon Health Coverage', url: 'https://yukon.ca/en/health-and-wellness' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    NT: {
      id: 5,
      title: 'Activate NWT Health Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Northwest Territories health insurance is active.',
      requirements: [
        'NWT Health Card',
        'Continued NWT residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'NWT Health Coverage', url: 'https://www.hss.gov.nt.ca/' }
      ],
      estimatedTime: 'Automatic after approval'
    },
    NU: {
      id: 5,
      title: 'Activate Nunavut Health Coverage',
      category: 'Healthcare',
      priority: 'high',
      completed: false,
      description: 'Ensure your Nunavut health insurance is active.',
      requirements: [
        'Nunavut Health Card',
        'Continued Nunavut residency'
      ],
      steps: [
        'Wait for approval and card arrival',
        'Carry card when accessing healthcare',
        'Update information if you move',
        'Renew as required'
      ],
      links: [
        { text: 'Nunavut Health Coverage', url: 'https://www.gov.nu.ca/health' }
      ],
      estimatedTime: 'Automatic after approval'
    }
  };

  return {
    healthcare: healthcareTask[province] || healthcareTask.BC,
    driversLicense: driversLicenseTask[province] || driversLicenseTask.BC,
    msp: mspTask[province] || mspTask.BC
  };
};

  const provinceTasks = getProvinceTasks();

  // Task data - province-specific tasks integrated
  const allTasks = [
    provinceTasks.healthcare, // Task 1 - Healthcare (province-specific)
    {
      id: 2,
      title: 'Apply for SIN',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Social Insurance Number (SIN) is required for working in Canada and accessing government benefits.',
      requirements: [
        'Work Permit or Study Permit',
        'Valid passport',
        'Proof of address in Canada'
      ],
      steps: [
        'Locate nearest Service Canada office',
        'Book an appointment or walk in',
        'Bring all required documents (originals only)',
        'Complete application form',
        'Receive your SIN immediately'
      ],
      links: [
        { text: 'Service Canada Offices', url: 'https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp' },
        { text: 'SIN Application Info', url: 'https://www.canada.ca/en/employment-social-development/services/sin.html' }
      ],
      estimatedTime: '30 minutes - 1 hour'
    },
    {
      id: 3,
      title: 'Open a Bank Account',
      category: 'Banking',
      priority: 'high',
      completed: false,
      description: 'Set up your Canadian bank account to manage money, receive payments, and pay bills.',
      requirements: [
        'Two pieces of ID (passport, study/work permit)',
        'Proof of address (utility bill, rental agreement)',
        'SIN (optional but helpful)',
        'Initial deposit amount varies by bank'
      ],
      steps: [
        'Research banks: RBC, TD, Scotiabank, BMO, CIBC',
        'Book appointment or visit branch',
        'Bring required documents',
        'Choose account type (chequing, savings, student)',
        'Set up online banking and debit card'
      ],
      links: [
        { text: 'Compare Banks', url: 'https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html' }
      ],
      estimatedTime: '1 hour'
    },
    provinceTasks.driversLicense, // Task 4 - Driver's License (province-specific)
    provinceTasks.msp, // Task 5 - Healthcare activation (province-specific)
    {
      id: 6,
      title: 'Find a Family Doctor',
      category: 'Healthcare',
      priority: 'medium',
      completed: false,
      description: 'Register with a family doctor for ongoing healthcare needs.',
      requirements: [
        'Provincial health card',
        'Health insurance enrollment'
      ],
      steps: [
        'Check provincial health registry',
        'Contact clinics accepting new patients',
        'Register as a patient',
        'Book initial appointment'
      ],
      links: [
        { text: 'Find a Doctor Canada', url: 'https://www.canada.ca/en/health-canada/services/home-continuing-care/find-doctor.html' }
      ],
      estimatedTime: 'Varies'
    },
    {
      id: 7,
      title: 'Get Public Transit Pass',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Get a transit pass for public transportation in your city.',
      requirements: [
        'Valid ID',
        'Payment method',
        'Student ID (for student discount)'
      ],
      steps: [
        'Visit local transit office or purchase online',
        'Choose pass type (monthly, student, etc.)',
        'Load pass onto card or app',
        'Use on all local transit'
      ],
      links: [
        { text: 'Public Transit in Canada', url: 'https://www.canada.ca/en/services/transport.html' }
      ],
      estimatedTime: '15-30 minutes'
    },
    {
      id: 8,
      title: 'Secure Housing',
      category: 'Housing',
      priority: 'medium',
      completed: false,
      description: 'Find suitable housing for your stay in Canada.',
      requirements: [
        'Proof of income or enrollment',
        'References',
        'First month rent + damage deposit'
      ],
      steps: [
        'Search online: Craigslist, Facebook Marketplace, PadMapper',
        'Contact landlords',
        'View properties',
        'Sign rental agreement',
        'Pay deposits and move in'
      ],
      links: [
        { text: 'Tenant Rights Canada', url: 'https://www.canada.ca/en/employment-social-development/programs/communities/homelessness/housing-first.html' }
      ],
      estimatedTime: 'Varies (1-4 weeks)'
    },
    {
      id: 9,
      title: 'Get a Phone Plan',
      category: 'Communication',
      priority: 'medium',
      completed: false,
      description: 'Set up a Canadian mobile phone plan.',
      requirements: [
        'Valid ID',
        'Credit check or prepaid option',
        'Unlocked phone (or purchase from carrier)'
      ],
      steps: [
        'Compare carriers: Rogers, Telus, Bell, Fido, Koodo',
        'Choose plan type',
        'Visit store or apply online',
        'Activate service'
      ],
      links: [
        { text: 'Compare Plans', url: 'https://www.canada.ca/en/radio-television-telecommunications/services/mobile/wireless-phone-plans.html' }
      ],
      estimatedTime: '1 hour'
    },
    {
      id: 10,
      title: 'Connect to Community Services',
      category: 'Community',
      priority: 'low',
      completed: false,
      description: 'Connect with local settlement agencies and community organizations.',
      requirements: [
        'None'
      ],
      steps: [
        'Research local settlement services',
        'Attend newcomer orientation sessions',
        'Join community groups',
        'Attend cultural events'
      ],
      links: [
        { text: 'Settlement Services', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/settle.html' }
      ],
      estimatedTime: 'Ongoing'
    },
    {
      id: 11,
      title: 'Understand Canadian Culture',
      category: 'Cultural Integration',
      priority: 'low',
      completed: false,
      description: 'Learn about Canadian customs, laws, and cultural norms.',
      requirements: [
        'None'
      ],
      steps: [
        'Read about Canadian culture and values',
        'Learn about Indigenous history and land',
        'Understand Canadian laws and rights',
        'Practice English/French if needed',
        'Attend cultural workshops'
      ],
      links: [
        { text: 'Discover Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html' }
      ],
      estimatedTime: 'Ongoing'
    }
  ];

  const [tasks, setTasks] = useState(allTasks);
const [tasksLoaded, setTasksLoaded] = useState(false);

  // Load tasks from backend/localStorage on mount
  useEffect(() => {
    const loadTasks = async () => {
      const savedProgress = await getTaskProgress();
      
      if (savedProgress) {
        // Merge saved completion state with task data
        const mergedTasks = allTasks.map(task => {
          const saved = savedProgress.find(p => p.taskId === task.id || p.id === task.id);
          return saved ? { ...task, completed: saved.completed } : task;
        });
        setTasks(mergedTasks);
      }
      
      setTasksLoaded(true);
    };

    loadTasks();
  }, []);
  
  const [expandedTask, setExpandedTask] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    const saveTasks = async () => {
      if (tasksLoaded) { // Only save after initial load
        await saveTaskProgress(tasks);
      }
    };
    
    saveTasks();
  }, [tasks, tasksLoaded]);

  const categories = ['all', 'Identification', 'Banking', 'Healthcare', 'Transportation', 'Housing', 'Communication', 'Community', 'Cultural Integration'];

  const toggleTask = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = filterCategory === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === filterCategory);

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="checklist-container">
      <CustomHeader />

      <Navigation currentPage="checklist" onNavigate={onNavigate} />

      <div className="checklist-content">
        <header className="checklist-header">
          <h1 className="checklist-title">Your Newcomer Checklist</h1>
          <p className="checklist-subtitle">
            Complete these essential tasks to settle in {location}, {province}
          </p>

          <div className="progress-overview">
            <div className="progress-text">
              <span className="progress-numbers">{completedCount} of {totalCount} Complete</span>
              <span className="progress-percentage">{progressPercentage}%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p className="auto-save-indicator">💾 Progress automatically saved</p>
          </div>
        </header>

        <div className="filter-section">
          <label className="filter-label">Filter by category:</label>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                onClick={() => setFilterCategory(category)}
              >
                {category === 'all' ? 'All Tasks' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="tasks-list">
          {filteredTasks.map(task => (
            <div 
              key={task.id} 
              className={`task-item ${task.completed ? 'completed' : ''} ${expandedTask === task.id ? 'expanded' : ''}`}
            >
              <div className="task-summary" onClick={() => toggleTask(task.id)}>
                <div className="task-check">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleComplete(task.id);
                    }}
                    className="task-checkbox"
                  />
                </div>
                <div className="task-info">
                  <h3 className="task-item-title">{task.title}</h3>
                  <div className="task-meta">
                    <span className="task-category-badge">{task.category}</span>
                    <span className={`task-priority priority-${task.priority}`}>
                      {task.priority === 'high' ? '🔴 High Priority' : task.priority === 'medium' ? '🟡 Medium' : '🟢 Low'}
                    </span>
                    <span className="task-time">⏱️ {task.estimatedTime}</span>
                  </div>
                </div>
                <button className="task-expand-btn">
                  {expandedTask === task.id ? '▼' : '▶'}
                </button>
              </div>

              {expandedTask === task.id && (
                <div className="task-details">
                  <p className="task-description">{task.description}</p>

                  <div className="task-section">
                    <h4 className="task-section-title">📋 What You Need:</h4>
                    <ul className="task-list">
                      {task.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="task-section">
                    <h4 className="task-section-title">✅ Steps to Complete:</h4>
                    <ol className="task-ordered-list">
                      {task.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="task-section">
                    <h4 className="task-section-title">🔗 Helpful Links:</h4>
                    <div className="task-links">
                      {task.links.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="task-link"
                        >
                          {link.text} →
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="task-actions">
                    <button 
                      className={`btn ${task.completed ? 'btn-secondary' : 'btn-primary'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(task.id);
                      }}
                    >
                      {task.completed ? '✓ Mark as Incomplete' : 'Mark as Complete'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="no-tasks">
            <p>No tasks found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checklist;